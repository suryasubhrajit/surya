"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text }: { text: string }) {
  return (
    <p className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
}