"use client";

import { motion } from "framer-motion";
import { PHONE, PHONE_DISPLAY, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerChild, viewport } from "@/lib/motion";

export default function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="inline-block bg-green-700/40 text-green-300 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Stupite u kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Pozovite nas ili pišite za besplatnu ponudu i informacije o cenama.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Phone */}
          <motion.a
            variants={staggerChild}
            href={`tel:${PHONE}`}
            className="group bg-gray-800 hover:bg-green-800 border border-gray-700 hover:border-green-600 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-green-700 group-hover:bg-green-600 rounded-2xl flex items-center justify-center mb-5 transition-colors">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Telefon
            </div>
            <div className="text-white font-bold text-xl group-hover:text-green-300 transition-colors">
              {PHONE_DISPLAY}
            </div>
            <div className="text-gray-500 text-sm mt-2">
              Dostupni svakog dana
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            variants={staggerChild}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 hover:bg-green-800 border border-gray-700 hover:border-green-600 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-green-700 group-hover:bg-green-600 rounded-2xl flex items-center justify-center mb-5 transition-colors">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
              WhatsApp
            </div>
            <div className="text-white font-bold text-xl group-hover:text-green-300 transition-colors">
              Pišite nam
            </div>
            <div className="text-gray-500 text-sm mt-2">
              Brz odgovor garantovan
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            variants={staggerChild}
            href={`mailto:${EMAIL}`}
            className="group bg-gray-800 hover:bg-green-800 border border-gray-700 hover:border-green-600 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-green-700 group-hover:bg-green-600 rounded-2xl flex items-center justify-center mb-5 transition-colors">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Email
            </div>
            <div className="text-white font-bold text-lg break-all group-hover:text-green-300 transition-colors">
              {EMAIL}
            </div>
            <div className="text-gray-500 text-sm mt-2">
              Pošaljite upit
            </div>
          </motion.a>
        </motion.div>

        {/* Promise section */}
        <div className="bg-green-900/40 border border-green-700/40 rounded-2xl p-8 text-center">
          <motion.h3
            className="text-xl font-bold text-white mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Šta nudimo
          </motion.h3>
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              {
                icon: "🚚",
                title: "Prevoz",
                text: "Dostavljamo ogradu do vaše lokacije",
              },
              {
                icon: "🔧",
                title: "Montaža",
                text: "Profesionalna ugradnja sa iskustvenim ekipama",
              },
              {
                icon: "📐",
                title: "Merenje",
                text: "Dolazimo na teren i merimo besplatno",
              },
              {
                icon: "✅",
                title: "Garancija",
                text: "Stojimo iza kvaliteta naših usluga",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerChild} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-white font-bold mb-1">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
