import FadeIn from "./FadeIn";

const services = [
  "3D Modeling",
  "Motion Graphics",
  "Brand Visuals",
  "Product Design",
  "Creative Direction",
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem,12vw,160px)" }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service} delay={i * 0.1}>
            <div className="border-b py-8 flex gap-6 text-[#0C0C0C]">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-3xl font-bold">{service}</h3>
                <p>Premium design solutions for modern brands.</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}