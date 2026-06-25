"use client";

import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {["About", "Price", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              className="text-[#D7E2EA] uppercase tracking-wider font-medium
              text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none
            whitespace-nowrap w-full text-center
            text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[13.5vw]
            px-6 md:px-10 mt-6 sm:mt-4 md:-mt-5"
          >
            Hi, i&apos;m surya
          </h1>
        </div>
      </FadeIn>

      {/* Portrait image is now handled globally via GlobalPortrait component */}

      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem,1.4vw,1.5rem)" }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}