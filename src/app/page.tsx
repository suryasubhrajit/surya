import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import GlobalPortrait from "@/components/GlobalPortrait";

export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <GlobalPortrait />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Premium Dark-Themed Footer */}
      <footer className="bg-[#060608] text-[#D7E2EA] px-6 sm:px-10 py-16 sm:py-24 border-t border-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Left section: Name, Role, and space for portrait placeholder */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-24">
              <span className="text-2xl sm:text-3xl font-black uppercase tracking-wider">Surya</span>
            </div>
            <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-mono">// 3D Creator & Developer</span>
          </div>

          {/* Right section: Links and Socials */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 font-mono text-xs sm:text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-slate-500 uppercase tracking-widest text-[10px]">// CONTACT</span>
              <a href="mailto:connectsuryasubhrajit@gmail.com" className="hover:text-emerald-400 transition-colors">connectsuryasubhrajit@gmail.com</a>
              <span className="text-slate-400">+1 (555) 019-2831</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-slate-500 uppercase tracking-widest text-[10px]">// SOCIALS</span>
              <a href="#" className="hover:text-emerald-400 transition-colors">Github</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-900/60 mt-12 pt-8 flex justify-between items-center text-[10px] text-slate-600 font-mono">
          <span>© 2026 SURYA. ALL RIGHTS RESERVED.</span>
          <span>SECURE_CONNECTION: ACTIVE</span>
        </div>
      </footer>
    </main>
  );
}