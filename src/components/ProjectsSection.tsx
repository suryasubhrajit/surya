"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

interface Project {
  title: string;
  category: string;
  timeline: string;
  link: string;
  linkLabel: string;
  bullets: string[];
  tags: string;
}

const projects: Project[] = [
  {
    title: "STARPAY",
    category: "Financial Telemetry (Freelance)",
    timeline: "May 2026",
    link: "#",
    linkLabel: "Private Project",
    bullets: [
      "Engineered a secure admin dashboard with graphs for audit-based financial reporting and enterprise business data management.",
      "Implemented PostgreSQL Row Level Security (RLS) to enforce strict multi-tenant data isolation across business units.",
      "Architected real-time financial telemetry using Supabase Realtime to push live updates to 40+ dynamic analytics widgets.",
      "Implemented UI component library with shadcn/ui to improve UI consistency and boost development velocity."
    ],
    tags: "PostgreSQL RLS • Supabase Realtime • shadcn/ui • React"
  },
  {
    title: "XAOR",
    category: "Cryptography (Open Source Contribution)",
    timeline: "June 2026",
    link: "https://github.com/ogxaor/xaor",
    linkLabel: "GitHub",
    bullets: [
      "Engineered a custom memory-hard password hashing library utilizing dynamic computation graphs to mitigate GPU/ASIC brute-force.",
      "Architected a multi-stage cryptographic pipeline featuring dual-chain TMTO resistance and CPU-bound memory arena allocation.",
      "Implemented an optional Quantum Mode providing 512-bit post-quantum security via authenticated dual XOF output streams.",
      "Published polyglot-native packages for Rust, Node.js, Python, Dart, and Go to ensure cross-platform consistency."
    ],
    tags: "Rust • Go • C++ • Cryptography • Polyglot Packages"
  },
  {
    title: "BOOFER",
    category: "Social Platform & Cloud Gaming",
    timeline: "Feb – June, 2026",
    link: "https://play.google.com/store/apps/details?id=com.shaadow.boofer.android",
    linkLabel: "Play Store",
    bullets: [
      "Architected a privacy-focused social platform featuring end-to-end encryption for secure messaging.",
      "Implemented a custom multi-factor authentication flow including biometric locks, passkeys, Userhandle, and App PIN.",
      "Developed a cloud-based storage system utilizing Telegram channels as a secure backend infrastructure.",
      "Engineered a high-performance cloud gaming ecosystem enabling seamless HTML5 mini-game execution."
    ],
    tags: "Android Kotlin • Flutter • E2EE • Cloud Storage • LLMs"
  }
];

function Card({ project, i }: { project: Project; i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  return (
    <div ref={ref} className="min-h-[85vh] md:h-[85vh] sticky top-16 pb-12">
      <motion.div
        style={{ scale }}
        className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px]
        border border-[#D7E2EA]/20 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between shadow-2xl shadow-black/80"
      >
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6 text-white border-b border-slate-900 pb-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-slate-500">0{i + 1}</span>
            <span className="text-xl sm:text-2xl font-black uppercase tracking-wider">{project.title}</span>
          </div>
          {project.link !== "#" ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-xs font-mono uppercase bg-white/5 hover:bg-white/10 text-[#D7E2EA] px-4 py-2 rounded-full border border-white/10 transition duration-200"
            >
              {project.linkLabel} <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-xs font-mono uppercase bg-white/5 text-slate-500 px-4 py-2 rounded-full border border-white/5">
              {project.linkLabel}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 flex-1">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">// KEY RESPONSIBILITIES & ACHIEVEMENTS</span>
            <ul className="space-y-3 text-sm text-slate-300">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2 bg-[#121214] border border-slate-900 rounded-2xl p-6 flex flex-col justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                // {project.timeline}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {project.category}
              </h4>
            </div>
            
            <div className="border-t border-slate-900 pt-4">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">// TECH STACK</span>
              <p className="text-xs font-mono text-[#D7E2EA] bg-[#0c0c0c] px-3 py-2 rounded-md border border-slate-800/50">
                {project.tags}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[50px] -mt-10 z-10 relative px-6 py-20 max-w-6xl mx-auto">
      <h2 className="hero-heading text-center font-black text-[10vw] sm:text-[8vw] mb-16">
        Projects
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <Card key={project.title} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}