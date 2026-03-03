"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerFast, staggerChild, viewport } from "@/lib/motion";

const gateTypes = [
  {
    title: "Klizna kapija",
    description:
      "Horizontalno se otvara klizanjem po šini. Idealna kada nema dovoljno mesta za otvaranje u dvorištu.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    ),
    features: ["Automatizacija dostupna", "Nema zauzimanja prostora", "Idealna za veće otvore"],
  },
  {
    title: "Pešačka kapija",
    description:
      "Prolazna kapija za pešake, usklađena sa ogradom. Izrađuje se u istom dizajnu i boji kao ograda.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    features: ["Usklađena sa ogradom", "Katanac ili brava", "Razne širine"],
  },
];

export default function Gates() {
  return (
    <section id="kapije" className="section-padding bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="inline-block bg-green-700/50 text-green-300 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Kompletno rešenje
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Klizne i Pešačke Kapije
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Kapije izrađene u istom stilu i boji kao vaša ograda. Profesionalna montaža.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {gateTypes.map((gate) => (
            <motion.div
              key={gate.title}
              variants={staggerChild}
              whileHover={{ y: -4 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="bg-green-800/50 border border-green-700/50 rounded-2xl p-8 hover:bg-green-800/70 transition-colors"
            >
              <div className="text-green-400 mb-4">{gate.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{gate.title}</h3>
              <p className="text-green-200/80 mb-6">{gate.description}</p>
              <ul className="space-y-2">
                {gate.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-green-100">
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {[
            "/ograde/WhatsApp Image 2026-02-25 at 22.28.19 (1).jpeg",
            "/ograde/WhatsApp Image 2026-02-25 at 22.59.41 (1).jpeg",
            "/ograde/WhatsApp Image 2026-02-25 at 22.54.24 (3).jpeg",
            "/ograde/WhatsApp Image 2026-02-25 at 22.54.24 (1).jpeg",
          ].map((src, i) => (
            <motion.div key={i} variants={staggerChild} className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Kapija primer ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-green-200 mb-6 text-lg">
            Kontaktirajte nas za cenu i informacije o kapijama
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovite: {PHONE_DISPLAY}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
