import FadeIn from "./FadeIn";

const services = [
  {
    title: "Full Stack Web Development",
    desc: "Building highly responsive, type-safe Next.js (App Router) and React web applications with clean, component-based code."
  },
  {
    title: "Mobile App Development",
    desc: "Developing native Android apps using Kotlin and cross-platform apps using Flutter for seamless mobile experiences."
  },
  {
    title: "Secure Auth & Cryptography",
    desc: "Architecting end-to-end encryption, multi-factor authentication (TOTP, Biometrics), and custom cryptographic pipelines."
  },
  {
    title: "Real-Time Telemetry & APIs",
    desc: "Integrating WebSockets, Supabase Realtime, and secure databases like PostgreSQL with Row Level Security."
  },
  {
    title: "Agentic AI & LLM Systems",
    desc: "Prompt engineering, orchestrating LLM companion tools, and building AI agent workflows using advanced models."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem,12vw,160px)" }}
      >
        Expertise
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <div className="border-b py-8 flex gap-6 text-[#0C0C0C]">
              <span className="font-mono text-sm pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">{service.title}</h3>
                <p className="text-slate-600 mt-2 text-sm sm:text-base">{service.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}