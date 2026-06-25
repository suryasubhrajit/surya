'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import {useState, useEffect} from 'react';
export default function GlobalPortrait() {
  const { scrollYProgress } = useScroll();

  // Refined scroll mapping inputs and outputs based on requested choreography
  // 0 - 2% -> Hero (Large & Centered)
  // 2 - 15% -> Hero -> About transition (Gradual movement, scales to 0.65, head shake, more to left)
  // 15 - 45% -> About -> Services transition (drifts left to right, scale 0.58)
  // 45 - 75% -> Services -> Projects transition (Right to Left, scale 0.48)
  // 75 - 95% -> Projects -> Footer transition (Docks above signature in footer, scale 0.34)
  // 95 - 100% -> Stays at docked bottom position with no extra motion

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const checkState = () => {
      setIsContactOpen(document.body.classList.contains("contact-modal-open"));
      setIsTyping(document.body.classList.contains("contact-user-typing"));
    };
    window.addEventListener("contact-modal-state-change", checkState);
    checkState();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("contact-modal-state-change", checkState);
    };
  }, []);

  const modalWidth = Math.min(800, windowSize.width - 32);
  const modalHeight = Math.min(550, windowSize.height - 32);
  const targetX = (modalWidth / 2) - 85;
  const targetY = -(modalHeight / 2) + 95;

  // Desktop Maps (using GPU friendly dvh units to prevent layout jumps on browser bar shrink)
  const xMapDesktop = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], ["0vw", "0vw", "-39vw", "45vw", "-55vw", "-40vw", "-40vw"]);
  const yMapDesktop = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], ["18dvh", "18dvh", "-5dvh", "5dvh", "18dvh", "12dvh", "-22dvh"]);
  const scaleMapDesktop = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], [1.0, 1.0, 0.65, 0.58, 0.36, 0.34, 0.20]);

  // Tablet Maps (using dvh units)
  const xMapTablet = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], ["0vw", "0vw", "-26vw", "26vw", "-36vw", "-30vw", "-30vw"]);
  const yMapTablet = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], ["15dvh", "15dvh", "-8dvh", "0dvh", "12dvh", "15dvh", "-15dvh"]);
  const scaleMapTablet = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], [0.8, 0.8, 0.55, 0.50, 0.32, 0.30, 0.18]);

  // Mobile Maps (Strictly vertical, using dvh units)
  const xMapMobile = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw"]);
  const yMapMobile = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], ["12dvh", "12dvh", "-26dvh", "-20dvh", "25dvh", "22dvh", "15dvh"]);
  const scaleMapMobile = useTransform(scrollYProgress, [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1], [0.65, 0.65, 0.45, 0.42, 0.30, 0.28, 0.18]);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  const xMap = isMobile ? xMapMobile : isTablet ? xMapTablet : xMapDesktop;
  const yMap = isMobile ? yMapMobile : isTablet ? yMapTablet : yMapDesktop;
  const scaleMap = isMobile ? scaleMapMobile : isTablet ? scaleMapTablet : scaleMapDesktop;

  const rotateMap = useTransform(
    scrollYProgress,
    [0, 0.02, 0.05, 0.08, 0.11, 0.15, 0.45, 0.75, 0.90, 1],
    [0, 0, -4, 4, -2, -8, 4, -4, -12, -12]
  );

  // MotionValue tracking modal state natively
  const contactOpenVal = useMotionValue(0);
  useEffect(() => {
    animate(contactOpenVal, isContactOpen ? 1 : 0, { duration: 0.35, ease: "easeInOut" });
  }, [isContactOpen, contactOpenVal]);

  const parseToPx = (val: string | number) => {
    if (typeof val === "number") return val;
    if (val.endsWith("vw")) {
      return (parseFloat(val) / 100) * windowSize.width;
    }
    if (val.endsWith("vh") || val.endsWith("dvh")) {
      return (parseFloat(val) / 100) * windowSize.height;
    }
    return parseFloat(val) || 0;
  };

  // Combine scroll map values with contact modal coordinates using native transforms
  const xTransform = useTransform([xMap, contactOpenVal], ([latestX, latestContactOpen]) => {
    if (isMobile && !isContactOpen) return 0; // Lock centered horizontally in header
    const closedPx = parseToPx(latestX);
    const openPx = targetX;
    const t = latestContactOpen as number;
    return closedPx * (1 - t) + openPx * t;
  });

  const yTransform = useTransform([yMap, contactOpenVal], ([latestY, latestContactOpen]) => {
    if (isMobile && !isContactOpen) return 0; // Lock centered vertically relative to header top coordinate
    const closedPx = parseToPx(latestY);
    const openPx = targetY;
    const t = latestContactOpen as number;
    return closedPx * (1 - t) + openPx * t;
  });

  const scaleTransform = useTransform([scaleMap, contactOpenVal], ([latestScale, latestContactOpen]) => {
    if (isMobile && !isContactOpen) return 0.85; // Static scale for header lock (larger for mobile layout width)
    const closedScale = latestScale as number;
    const openScale = 0.22;
    const t = latestContactOpen as number;
    return closedScale * (1 - t) + openScale * t;
  });

  const rotateTransform = useTransform([rotateMap, contactOpenVal], ([latestRotate, latestContactOpen]) => {
    if (isMobile && !isContactOpen) return 0; // Lock rotation in header
    const closedRotate = latestRotate as number;
    const openRotate = 0;
    const t = latestContactOpen as number;
    return closedRotate * (1 - t) + openRotate * t;
  });

  const opacityTarget = useMotionValue<number>(1);
  useEffect(() => {
    opacityTarget.set(isTyping ? 0 : 1);
  }, [isTyping]);

  // Springs for physical momentum and smoother tracking
  const scale = useSpring(scaleTransform, { stiffness: 95, damping: 25, mass: 1 });
  const x = useSpring(xTransform, { stiffness: 75, damping: 23, mass: 1 });
  const y = useSpring(yTransform, { stiffness: 75, damping: 23, mass: 1 });
  const rotate = useSpring(rotateTransform, { stiffness: 85, damping: 20, mass: 0.8 });
  const opacity = useSpring(opacityTarget, { stiffness: 100, damping: 22 });

  // GPU accelerate transforms and merge the translate centering with Framer Motion offsets
  const transformTemplate = ({ x, y, scale, rotate }: any) => {
    return `translate3d(calc(-50% + ${x}), calc(-50% + ${y}), 0) scale(${scale}) rotate(${rotate})`;
  };

  return (
    <motion.div
      transformTemplate={transformTemplate}
      style={{
        x,
        y,
        scale,
        rotate,
        opacity,
        willChange: "transform, opacity",
      }}
      className={
        isMobile && !isContactOpen 
          ? "absolute top-[45dvh] left-1/2 z-50 pointer-events-none origin-center"
          : "fixed left-1/2 top-1/2 z-50 pointer-events-none origin-center"
      }
    >
      {/* Nested floating/breathing animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/potrait_face.png"
          alt="surya"
          loading='eager'
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
}


