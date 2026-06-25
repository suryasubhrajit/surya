import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GlobalPortrait from "@/components/GlobalPortrait";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <GlobalPortrait />
      <HeroSection />
      {/* <MarqueeSection /> */}
      <div id="about"></div>
      <AboutSection />
      <div id="services"></div>
      <ServicesSection />
      <div id="skills"></div>
      <SkillsSection />
      <div id="projects"></div>
      <ProjectsSection />

      {/* Premium Dark-Themed Footer */}
      <Footer />
    </main>
  );
}