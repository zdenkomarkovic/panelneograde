"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerFast, staggerChild, viewport } from "@/lib/motion";

const heights = ["103 cm", "123 cm", "143 cm", "163 cm", "183 cm", "203 cm"];
const thicknesses = ["6-5-6 mm", "8-6-8 mm"];
const colors = [
  { name: "Bela", hex: "#f8fafc", border: "#cbd5e1" },
  { name: "Plava", hex: "#1e40af", border: "#1e40af" },
  { name: "Antracit", hex: "#374151", border: "#374151" },
  { name: "Tamno zelena", hex: "#14532d", border: "#14532d" },
];

const specs = [
  { label: "Debljina žice", value: "6-5-6 mm ili 8-6-8 mm" },
  { label: "Dužina panela", value: "2,5 m" },
  { label: "Dostupne visine", value: "103 / 123 / 143 / 163 / 183 / 203 cm" },
  { label: "Dostupne boje", value: "Bela, Plava, Antracit, Tamno zelena" },
  { label: "Ugradnja", value: "Usadna ili anker" },
];

export default function Products2D() {
  return (
    <section id="ograde-2d" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Klasičan dizajn
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            2D Panelne Ograde
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Izdržljive 2D ograde sa ravnim profilom. Dostupne u šest visina i dve debljine žice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Specs - first on desktop */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Spec table */}
            <motion.div variants={staggerChild} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden mb-6">
              <div className="bg-gray-800 px-6 py-4">
                <h3 className="text-white font-bold text-lg">Specifikacije</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-start px-6 py-4 gap-4"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-500 mt-2" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        {spec.label}
                      </p>
                      <p className="text-gray-900 font-medium mt-0.5">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Thicknesses */}
            <motion.div variants={staggerChild} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Debljine žice
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {thicknesses.map((t) => (
                  <div
                    key={t}
                    className="bg-white border border-gray-200 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-black text-gray-900">{t}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {t === "6-5-6 mm" ? "Standardna" : "Pojačana"}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Heights */}
            <motion.div variants={staggerChild} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Dostupne visine
              </h3>
              <div className="flex flex-wrap gap-2">
                {heights.map((h) => (
                  <span
                    key={h}
                    className="bg-white border border-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg text-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Colors */}
            <motion.div variants={staggerChild} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Dostupne boje</h3>
              <div className="grid grid-cols-2 gap-3">
                {colors.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 border-2"
                      style={{
                        backgroundColor: c.hex,
                        borderColor: c.border,
                      }}
                    />
                    <span className="text-gray-800 font-medium text-sm">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="order-1 lg:order-2 grid grid-cols-2 gap-3"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.35.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.35%20%281%29.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.35%20%282%29.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.36.jpeg",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`2D ograda primer ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
