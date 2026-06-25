"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillModules = [
  {
    id: "languages",
    title: "Languages & Core",
    skills: ["TypeScript", "JavaScript (ES6+)", "Dart", "PHP", "HTML5", "CSS3"]
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
    skills: ["React.js", "Next.js (App Router)", "Flutter", "Vite", "Tailwind CSS", "Redux", "Glass Morphic UI"]
  },
  {
    id: "backend",
    title: "Backend & Cache",
    skills: ["Node.js", "Express.js", "Nest.js", "Bun", "Redis", "Firebase", "Mongoose"]
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "SQLite", "AWS DynamoDB"]
  },
  {
    id: "security",
    title: "Auth, Cryptography & Security",
    skills: ["End-to-End Encryption (E2EE)", "OAuth 2.0", "Supabase Auth", "Row Level Security (RLS)", "JWT", "Bcrypt", "OpenSSL", "PBKDF2", "XAOR"]
  },
  {
    id: "ai",
    title: "Agentic AI & LLMs",
    skills: ["Antigravity", "Claude Sonnet 4.5", "Gemini Flash", "GPT 5", "Kiro", "Codex", "WindSurf", "Claude CLI", "Qwen Coder"]
  }
];

export default function SkillsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="bg-[#0C0C0C] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-emerald-500 text-sm mb-12">// SYSTEM_MODULES_INDEX</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillModules.map((module) => (
            <motion.div
              key={module.id}
              layout
              onClick={() => setExpanded(expanded === module.id ? null : module.id)}
              className={`p-6 border border-slate-800 rounded-xl cursor-pointer transition-all flex flex-col ${
                expanded === module.id 
                  ? "col-span-2 row-span-2 bg-[#121214] border-emerald-500/30" 
                  : "bg-[#0f0f11] hover:border-emerald-500/30"
              }`}
            >
              <h3 className="font-mono text-emerald-400 text-xs mb-4">// {module.title}</h3>
              
              {/* Conditional Layout based on expansion */}
              <div className={`flex flex-wrap gap-2 ${expanded === module.id ? "grid grid-cols-2 gap-4 mt-4" : ""}`}>
                {module.skills.map((skill, index) => {
                  // Only show limited count when collapsed
                  if (expanded !== module.id && index >= 3) return null;
                  
                  return (
                    <motion.span 
                      key={skill}
                      layout
                      className={`px-3 py-2 bg-[#1A1A1A] text-[11px] text-slate-300 font-mono border border-slate-800 rounded flex items-center justify-between ${
                        expanded === module.id ? "w-full" : "w-auto"
                      }`}
                    >
                      {skill}
                      {expanded === module.id && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500/20" />
                      )}
                    </motion.span>
                  );
                })}
              </div>

              {/* "More" indicator when collapsed */}
              {expanded !== module.id && module.skills.length > 3 && (
                <span className="text-[10px] text-emerald-500 font-mono mt-2">
                  +{module.skills.length - 3} MORE
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}