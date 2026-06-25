"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

function Card({ i }: { i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div ref={ref} className="h-[85vh] sticky top-10">
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
        border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full"
      >
        <div className="flex justify-between mb-8 text-white">
          <span>0{i + 1}</span>
          <span>Branding</span>
          <span>Project {i + 1}</span>
          <button className="flex gap-2 items-center">
            Live Project <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4 h-[75%]">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-zinc-800 rounded-3xl flex-1" />
            <div className="bg-zinc-800 rounded-3xl flex-1" />
          </div>
          <div className="col-span-3 bg-zinc-700 rounded-3xl" />
         </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[50px] -mt-10 z-10 relative px-6 py-20">
      <h2 className="hero-heading text-center font-black text-[12vw] mb-12">
        Project
      </h2>

      {[0, 1, 2].map((i) => (
        <Card key={i} i={i} />
      ))}
    </section>
  );
}