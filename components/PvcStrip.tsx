"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerFast, staggerChild, viewport } from "@/lib/motion";

const stripColors = [
  {
    name: "Antracit",
    description: "Tamno siva boja, moderan i neutralan izgled",
    hex: "#374151",
  },
  {
    name: "Tamno zelena",
    description: "Prirodna zelena boja, idealno za prirodno okruženje",
    hex: "#14532d",
  },
];

const benefits = [
  "Pojačava privatnost - zatvara pogled kroz ogradu",
  "Štiti od vetra i buke",
  "Lako se montira i zamenjuje",
  "Dugotrajan PVC materijal otporan na UV",
  "Svaka rolna ima 26 metara trake",
];

export default function PvcStrip() {
  return (
    <section id="pvc-traka" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="inline-block bg-green-100 text-green-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Dodatna zaštita privatnosti
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            PVC Traka
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            PVC traka u rolni se provlači kroz panele ograde za potpunu privatnost. Svaka rolna
            sadrži 26 metara trake.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Images */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10%20%281%29.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10%20%282%29.jpeg",
              "/ograde/WhatsApp Image 2026-02-25 at 22.58.00 (1).jpeg",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`PVC traka primer ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Key stat */}
            <motion.div
              variants={staggerChild}
              className="bg-green-800 text-white rounded-2xl p-6 mb-6 flex items-center gap-6"
            >
              <div className="text-center flex-shrink-0">
                <div className="text-5xl font-black text-green-300">26m</div>
                <div className="text-green-200 text-sm font-medium">po rolni</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Jedna rolna = 26 metara</h3>
                <p className="text-green-200/80 text-sm">
                  Svaka rolna PVC trake sadrži 26 metara i pokriva veću površinu ograde.
                </p>
              </div>
            </motion.div>

            {/* Colors */}
            <motion.div
              variants={staggerChild}
              className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 mb-4">Dostupne boje</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {stripColors.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div>
                      <div className="font-bold text-gray-900">{c.name}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{c.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={staggerChild}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 mb-4">Prednosti PVC trake</h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
