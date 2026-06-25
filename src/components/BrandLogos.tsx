"use client";

import React from "react";
import FadeIn from "./FadeIn";

export default function BrandLogos() {
  const logos = [
    { name: "Shaadow", tooltip: 'To visit Shaadow click me.', src: "/images/logos/shaadow.png", url: "https://play.google.com/store/apps/dev?id=5132408139673751558" },
    { name: "Xaor", tooltip: 'To visit Xaor click me.', src: "/images/logos/xaor.jpg", url: "https://xaor.onrender.com/test" },
    { name: "Boofer", tooltip: 'To visit Boofer click me.', src: "/images/logos/boofer.png", url: "https://play.google.com/store/apps/details?id=com.shaadow.boofer.android" },
    { name: "Favtunes", tooltip: 'To visit Favtunes click me.', src: "/images/logos/favtunes.png", url: "https://play.google.com/store/apps/details?id=com.shaadow.tunes" },
  ];

  return (
    <section className="w-full bg-[#050505] border-t border-[#151515] py-8 px-10 relative">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-10 md:gap-20">
        {logos.map((logo, index) => (
          <FadeIn key={logo.name} delay={index * 0.15} y={15}>
            <div 
              onClick={() => window.open(logo.url, "_blank", "noopener,noreferrer")}
              className="relative group flex items-center justify-center gap-3 cursor-help md:gap-4 opacity-45 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
              <span className="font-bold text-[17px] md:text-[20px] text-[#666] group-hover:text-[#D7E2EA] transition-colors duration-300 font-mono tracking-widest uppercase">
                {logo.name}
              </span>

              {/* Custom Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#111] text-[#00ff41] text-[11px] font-mono px-3 py-1.5 rounded border border-[#333] whitespace-nowrap shadow-[0_0_15px_rgba(0,255,65,0.1)] z-50">
                {logo.tooltip}
                <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111] border-b border-r border-[#333] rotate-45"></div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
