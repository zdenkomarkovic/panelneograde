"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn, viewport } from "@/lib/motion";

const stats = [
  { value: "500+", label: "Zadovoljnih klijenata", icon: "😊" },
  { value: "10+", label: "Godina iskustva", icon: "🏆" },
  { value: "48h", label: "Brza isporuka i montaža", icon: "⚡" },
  { value: "100%", label: "Garancija na radove", icon: "✅" },
];

export default function Stats() {
  return (
    <section className="bg-green-800 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="text-center group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-green-300/80 text-sm font-medium leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
