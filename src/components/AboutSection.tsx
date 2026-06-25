import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

export default function AboutSection() {
  return (
    <section 
      style={{ willChange: "transform" }}
      className="min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem,12vw,160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <div style={{ fontSize: "clamp(1rem,2vw,1.35rem)" }} className="mt-8 max-w-4xl text-center leading-relaxed">
        <AnimatedText
          text="I am a motivated Full Stack & Mobile Developer with strong expertise in React, Next.js, Android Native (Kotlin), and Flutter. Experienced in building responsive, type-safe, and secure full-stack applications with clean, component-based code. From architecting end-to-end encrypted platforms and cryptographic pipelines to building real-time telemetry dashboards, I focus on delivering high-quality user experiences."
        />
      </div>

      <div className="mt-8">
        <ContactButton />
      </div>
    </section>
  );
}