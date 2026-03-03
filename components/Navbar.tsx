"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_DISPLAY, PHONE } from "@/lib/constants";

const navItems = [
  { label: "Početna", href: "/#home" },
  { label: "3D Ograde", href: "/#ograde-3d" },
  { label: "2D Ograde", href: "/#ograde-2d" },
  { label: "Kapije", href: "/#kapije" },
  { label: "PVC Traka", href: "/#pvc-traka" },
  { label: "Galerija", href: "/#galerija" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-green-900 shadow-xl" : "bg-green-900/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Alek Panelne Ograde"
            width={62}
            height={62}
            className="rounded-lg"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = item.href === "/kontakt" && pathname === "/kontakt";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-green-100 hover:text-white hover:bg-green-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone CTA */}
        <a
          href={`tel:${PHONE}`}
          className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {PHONE_DISPLAY}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 rounded hover:bg-green-800 transition-colors"
          aria-label="Otvori meni"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-green-900 border-t border-green-700 overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3.5 text-green-100 hover:bg-green-800 hover:text-white border-b border-green-800 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 px-5 py-4 text-green-300 font-bold text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
