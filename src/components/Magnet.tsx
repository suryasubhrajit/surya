"use client";
import { useRef } from "react";

export default function Magnet({ children }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 3;
    const y = (e.clientY - rect.top - rect.height / 2) / 3;

    el.style.transition = "transform 0.3s ease-out";
    el.style.transform = `translate3d(${x}px,${y}px,0)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.6s ease-in-out";
    ref.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset}>
      {children}
    </div>
  );
}