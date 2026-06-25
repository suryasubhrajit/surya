"use client";
import { useEffect, useRef, useState } from "react";

const imgs = Array.from({ length: 21 }, (_, i) =>
  `https://picsum.photos/seed/${i}/420/270`
);

export default function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const top = ref.current.offsetTop;
      const value = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row1 = [...imgs.slice(0, 11), ...imgs.slice(0, 11), ...imgs.slice(0, 11)];
  const row2 = [...imgs.slice(11), ...imgs.slice(11), ...imgs.slice(11)];

  return (
    <section ref={ref} className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex gap-3 mb-3" style={{ transform: `translateX(${offset - 200}px)` }}>
        {row1.map((img, i) => (
          <img key={i} src={img} className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
        ))}
      </div>

      <div className="flex gap-3" style={{ transform: `translateX(${-offset + 200}px)` }}>
        {row2.map((img, i) => (
          <img key={i} src={img} className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
        ))}
      </div>
    </section>
  );
}