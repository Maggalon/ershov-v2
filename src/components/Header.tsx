"use client";

import { motion } from "motion/react";
import { FilmReel } from "@phosphor-icons/react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-4 left-0 right-0 z-40 max-w-7xl mx-auto px-4"
    >
      <div className="glass-panel rounded-full px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <FilmReel size={24} className="text-rose-500 transition-transform duration-500 group-hover:rotate-180" />
          <span className="font-mono text-sm tracking-widest font-semibold uppercase">
            Ершов <span className="text-rose-500">.</span> VFX
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("showreel")} 
            className="text-xs tracking-wider uppercase text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Шоурил
          </button>
          <button 
            onClick={() => scrollToSection("projects")} 
            className="text-xs tracking-wider uppercase text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Проекты
          </button>
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-xs tracking-wider uppercase text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Услуги
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-xs tracking-wider uppercase text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Обо мне
          </button>
        </nav>

        {/* Contact CTA */}
        <div>
          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-5 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-rose-500 hover:text-white hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-white/5"
          >
            Связаться
          </button>
        </div>
      </div>
    </motion.header>
  );
}
