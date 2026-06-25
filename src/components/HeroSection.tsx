"use client";

import { useEffect, useRef } from "react";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Configuration
    const LINE_COUNT = 18;
    const lines: {
      x: number; y: number;
      targetX: number; targetY: number;
      vx: number; vy: number;
      alpha: number; fading: boolean
    }[] = [];

    const initLine = (i: number) => {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const targetX = startX + (Math.random() - 0.5) * 400; // Point A to B distance
      const targetY = startY + (Math.random() - 0.5) * 400;

      lines[i] = {
        x: startX,
        y: startY,
        targetX,
        targetY,
        vx: (targetX - startX) / 200, // Speed factor
        vy: (targetY - startY) / 200,
        alpha: 0,
        fading: false
      };
    };

    // Initialize lines
    for (let i = 0; i < LINE_COUNT; i++) initLine(i);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      lines.forEach((line, i) => {
        // Move lines
        line.x += line.vx;
        line.y += line.vy;

        // Fade logic
        if (!line.fading && line.alpha < 0.55) line.alpha += 0.01;
        if (line.alpha >= 0.55) line.fading = true;
        if (line.fading) line.alpha -= 0.005;

        // Reset if invisible
        if (line.alpha <= 0) initLine(i);

        // Draw
        ctx.beginPath();
        ctx.strokeStyle = `rgba(215, 226, 234, ${line.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + (line.vx * 10), line.y + (line.vy * 10)); // Tail effect
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      style={{ willChange: "transform" }}
      className="h-screen flex flex-col relative bg-[#0a0a0a] overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col h-full w-full justify-between">

        <div className="h-5"></div>

        <h1 className="text-[13vw] font-black uppercase text-center text-[#D7E2EA]">
          Hi, i&apos;m surya.
        </h1>

        <div className="mt-auto flex flex-col md:flex-row justify-between md:items-end pb-10 px-8 md:px-10 gap-6 md:gap-0">
          <div className="flex flex-col gap-4">
            <div className="md:hidden block">
              <ContactButton />
            </div>
            <p className="text-[#D7E2EA] w-full md:w-64 uppercase leading-snug">
              a full stack & mobile developer crafting high-quality user experiences
            </p>
          </div>
          <div className="hidden md:block">
            <FadeIn delay={0.5}>
              <ContactButton />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}