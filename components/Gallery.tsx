"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerFast, staggerChild, viewport } from "@/lib/motion";

const PER_PAGE = 16;

const images = [
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.28.21%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.28.21.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.33.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.35%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.35%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.35.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.36%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.36%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.36%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.36%20%284%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.36.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.37%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.37%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.37%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.37%20%284%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.30.37.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.23.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.24%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.24%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.24%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.24%20%284%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.24.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.25%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.25%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.25%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.54.25.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.26%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.26%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.26.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.27%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.27%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.27.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.28%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.28%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.28%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.55.28.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.02.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.03.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.04%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.04%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.04.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.05%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.05%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.05%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.05%20%284%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.05.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.58%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.58%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.58.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.59%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.57.59.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.58.00%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.58.00%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.58.00%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.58.00.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.58.01.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10%20%283%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10%20%284%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10%20%285%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.10.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.11.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.39%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.39.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.40%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.40%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.40.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.41%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.41%20%282%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.41.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.42%20%281%29.jpeg",
  "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.59.42.jpeg",
];

const totalPages = Math.ceil(images.length / PER_PAGE);

export default function Gallery() {
  const [page, setPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const pageImages = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const changePage = (newPage: number) => {
    setPage(newPage);
    document.getElementById("galerija")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="galerija" className="section-padding bg-white">
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
            Naši radovi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Galerija
          </h2>
          <p className="text-gray-500 text-base">
            {images.length} slika &bull; Strana {page + 1} od {totalPages}
          </p>
        </motion.div>

        {/* Grid — key={page} causes remount + re-entrance on pagination */}
        <motion.div
          key={page}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mb-10"
          variants={staggerFast}
          initial="hidden"
          animate="visible"
        >
          {pageImages.map((src, i) => {
            const globalIndex = page * PER_PAGE + i;
            return (
              <motion.button
                key={src}
                variants={staggerChild}
                onClick={() => openLightbox(globalIndex)}
                className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <Image
                  src={src}
                  alt={`Galerija slika ${globalIndex + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {/* Prev */}
            <button
              onClick={() => changePage(page - 1)}
              disabled={page === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Nazad
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => {
              const show = i === 0 || i === totalPages - 1 || Math.abs(i - page) <= 1;
              const showEllipsisBefore = i === page - 2 && page > 3;
              const showEllipsisAfter = i === page + 2 && page < totalPages - 4;

              if (showEllipsisBefore || showEllipsisAfter) {
                return (
                  <span key={`ellipsis-${i}`} className="px-2 text-gray-400 select-none">
                    …
                  </span>
                );
              }
              if (!show) return null;
              return (
                <button
                  key={i}
                  onClick={() => changePage(i)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-colors ${
                    i === page
                      ? "bg-green-700 text-white shadow-sm"
                      : "border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-700"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => changePage(page + 1)}
              disabled={page === totalPages - 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium text-sm"
            >
              Napred
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm font-semibold px-4 py-1.5 rounded-full z-10 select-none">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/25 rounded-full p-2.5 transition-colors"
              aria-label="Zatvori"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Prev arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 sm:left-6 z-10 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 transition-colors"
              aria-label="Prethodna slika"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Image */}
            <div
              className="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto px-16 sm:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={lightboxIndex}
                src={images[lightboxIndex]!}
                alt={`Slika ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </div>

            {/* Next arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 sm:right-6 z-10 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 transition-colors"
              aria-label="Sledeća slika"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs select-none hidden sm:block">
              ← → navigacija &bull; Esc zatvori
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
