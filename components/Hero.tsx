"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

const slides = [
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.36%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.26%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.58.jpeg",
];

const INTERVAL = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [zoomKey, setZoomKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setZoomKey((k) => k + 1);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Zoom wrapper - remounts on each activation to restart animation */}
          <div
            key={i === current ? `zoom-${zoomKey}` : `idle-${i}`}
            className="absolute inset-0"
            style={i === current ? { animation: "heroZoom 6s ease-out forwards" } : undefined}
          >
            <Image
              src={src}
              alt={`Panelne ograde ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
              quality={85}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-700/60 via-gray-700/40 to-gray-700/20" />
        </div>
      ))}

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Profesionalna ugradnja ograda
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
        >
          ALEK
          <br />
          <span className="text-green-400">PANELNE OGRADE</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-green-100 font-bold mb-3"
        >
          Prodaja i ugradnja
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-white mb-10 max-w-2xl mx-auto"
        >
          3D i 2D panelne ograde &bull; Klizne i pešačke kapije &bull; PVC traka &bull; Prevoz i
          montaža
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovi: {PHONE_DISPLAY}
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </motion.div>

        {/* Features row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white text-sm"
        >
          {[
            "Prevoz obezbeđen",
            "Profesionalna montaža",
            "Usadna i anker ugradnja",
            "Više boja i dimenzija",
          ].map((feat) => (
            <div key={feat} className="flex items-center gap-2">
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
              {feat}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Slide indicators + scroll arrow */}
      <div className="hidden absolute bottom-8 left-0 right-0 z-20 md:flex flex-col items-center gap-4">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setZoomKey((k) => k + 1);
              }}
              aria-label={`Slajd ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-green-400"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Scroll arrow */}
        <div className="text-green-300/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
