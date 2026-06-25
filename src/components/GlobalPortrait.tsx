'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function GlobalPortrait() {
  const { scrollYProgress } = useScroll();

  // Refined scroll mapping inputs and outputs based on requested choreography
  // 0 - 2% -> Hero (Large & Centered)
  // 2 - 15% -> Hero -> About transition (Gradual movement, scales to 0.65, head shake, more to left)
  // 15 - 45% -> About -> Services transition (drifts left to right, scale 0.58)
  // 45 - 75% -> Services -> Projects transition (Right to Left, scale 0.48)
  // 75 - 95% -> Projects -> Footer transition (Docks above signature in footer, scale 0.34)
  // 95 - 100% -> Stays at docked bottom position with no extra motion

  const scaleMap = useTransform(
    scrollYProgress,
    [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1],
    [1.0, 1.0, 0.65, 0.58, 0.48, 0.34, 0.34]
  );

  const xMap = useTransform(
    scrollYProgress,
    [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1],
    ["0vw", "0vw", "-28vw", "24vw", "-18vw", "-32vw", "-32vw"]
  );

  const yMap = useTransform(
    scrollYProgress,
    [0, 0.02, 0.15, 0.45, 0.75, 0.90, 1],
    ["18vh", "18vh", "-5vh", "5vh", "12vh", "20vh", "20vh"]
  );

  // Rotate mapping:
  // Transition Hero -> About (2% -> 15%) does the cute head shake (0 -> -4 -> 4 -> -2 -> -8)
  // Sways gently during transitions and rests tilted at -12 degrees from 95% to 100%
  const rotateMap = useTransform(
    scrollYProgress,
    [0, 0.02, 0.05, 0.08, 0.11, 0.15, 0.45, 0.75, 0.90, 1],
    [0, 0, -4, 4, -2, -8, 4, -4, -12, -12]
  );

  // Springs for physical momentum and smoother tracking
  const scale = useSpring(scaleMap, { stiffness: 95, damping: 25, mass: 1 });
  const x = useSpring(xMap, { stiffness: 75, damping: 23, mass: 1 });
  const y = useSpring(yMap, { stiffness: 75, damping: 23, mass: 1 });
  const rotate = useSpring(rotateMap, { stiffness: 85, damping: 20, mass: 0.8 });

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        rotate,
      }}
      className="fixed left-1/2 top-1/2 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2 origin-center"
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
          src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
          alt="surya"
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
}


