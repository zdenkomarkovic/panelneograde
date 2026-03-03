"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const testimonials = [
  {
    name: "Marko Petrović",
    location: "Beograd",
    rating: 5,
    text: "Odlična usluga od početka do kraja. Ekipa je došla na vreme, sve izmerila i ugradila za jedan dan. 3D ograda izgleda fantastično, komšije me svaki dan pitaju ko je radio. Preporučujem svima!",
    product: "3D ograda, antracit",
  },
  {
    name: "Snežana Jovanović",
    location: "Novi Sad",
    rating: 5,
    text: "Zvala sam nekoliko firmi, ali Alek je bio jedini koji je odmah odgovorio i dao konkretan odgovor. Cena je bila fer, montaža profesionalna. Ograda stoji kao urađena, nikakvih problema.",
    product: "2D ograda + pešačka kapija",
  },
  {
    name: "Dragan Nikolić",
    location: "Niš",
    rating: 5,
    text: "Uzeo sam ogradu sa PVC trakom u tamno zelenoj boji i nisam mogao biti zadovoljniji. Traka daje potpunu privatnost a ograda izgleda skuplje nego što jeste. Montažeri su bili uredni i brzi.",
    product: "3D ograda sa PVC trakom",
  },
  {
    name: "Vesna Milošević",
    location: "Kragujevac",
    rating: 5,
    text: "Klizna kapija radi savršeno već godinu dana, ni jedan problem. Prevoz i montaža su bili uključeni u cenu što je super. Vladaalek je bio strpljiv i odgovorio na svako moje pitanje.",
    product: "Klizna kapija + ograda",
  },
  {
    name: "Zoran Đorđević",
    location: "Subotica",
    rating: 5,
    text: "Imao sam čoklu pa smo radili anker ugradnju. Ekipa je znala tačno šta radi, nije bilo nikakvih komplikacija. Ograda je čvrsta, kvalitetan materijal. Topla preporuka!",
    product: "3D ograda, anker ugradnja",
  },
  {
    name: "Milica Stanković",
    location: "Čačak",
    rating: 5,
    text: "Super saradnja! Dogovorili smo sve telefonom, poslali mere i za kratko vreme je ograda bila gotova. Bela 3D ograda izgleda prelepo uz cveće. Cena odlična za ovaj kvalitet.",
    product: "3D ograda, bela boja",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  }, []);

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  return (
    <section className="section-padding bg-green-900 overflow-hidden">
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
            Recenzije kupaca
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Šta kažu naši klijenti
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars />
            <span className="text-green-200 font-semibold ml-1">5.0</span>
            <span className="text-green-400/50 mx-1">·</span>
            <span className="text-green-300/70 text-sm">{testimonials.length} recenzija</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          {/* Fade edge left */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 z-10 bg-gradient-to-r from-green-900 to-transparent" />
          {/* Fade edge right */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 z-10 bg-gradient-to-l from-green-900 to-transparent" />

          {/*
            Each card:
              - position: absolute, left: 50% → anchor at container center
              - w-[80%] → card width = 80% of container
              - translateX(calc(-50% + offset*(100%+20px)))
                  offset = 0  → translateX(-50%)             → centered ✓
                  offset = 1  → translateX(calc(50% + 20px)) → peek from right ✓
                  offset = -1 → translateX(calc(-150%-20px)) → peek from left ✓
              NOTE: translateX % is relative to the element itself (card width),
              so 100% = one card width = exactly the spacing we need.
          */}
          <div className="relative min-h-[290px] sm:min-h-[260px]">
            {testimonials.map((t, i) => {
              const offset = i - current;
              return (
                <div
                  key={i}
                  className={`absolute top-0 left-1/2 w-4/5 transition-all duration-500 ease-in-out ${
                    i === current
                      ? "opacity-100 z-10"
                      : "opacity-40 z-0 cursor-pointer hover:opacity-60"
                  }`}
                  style={{
                    transform: `translateX(calc(-50% + ${offset} * (100% + 20px)))`,
                  }}
                  onClick={() => i !== current && goTo(i)}
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-6 sm:p-9 flex flex-col gap-4">
                    {/* Quote icon */}
                    <svg className="w-8 h-8 text-green-400/40 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    {/* Text */}
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {t.text}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xs">
                            {t.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">{t.name}</div>
                          <div className="text-green-300/70 text-xs">{t.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Stars />
                        <div className="text-green-300/60 text-xs mt-1">{t.product}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/60 border border-white/20 rounded-full p-2.5 transition-colors"
            aria-label="Prethodna"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/60 border border-white/20 rounded-full p-2.5 transition-colors"
            aria-label="Sledeća"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Recenzija ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-green-400"
                  : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
