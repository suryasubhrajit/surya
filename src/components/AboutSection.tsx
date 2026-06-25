import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

export default function AboutSection() {
  return (
    <section className="min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center">
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem,12vw,160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <div style={{ fontSize: "clamp(1rem,2vw,1.35rem)" }} className="mt-8">
        <AnimatedText
          text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
        />
      </div>

      <div className="mt-8">
        <ContactButton />
      </div>
    </section>
  );
}