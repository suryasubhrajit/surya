"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text }: { text: string }) {
  return (
    <p className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]">
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: Math.min(i * 0.015, 1) }}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}