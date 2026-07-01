"use client";

import { motion } from "motion/react";
import { ArrowRight, Chat } from "@phosphor-icons/react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 md:pt-24 overflow-hidden timeline-grid">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] glow-bg animate-pulse-slow opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto w-full px-4 text-center z-10 py-12 md:py-20 flex flex-col items-center justify-center space-y-8">
        
        {/* Element 1: Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-900 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
            РЕЖИССЕР МОНТАЖА & VFX
          </span>
        </motion.div>

        {/* Element 2: Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-gradient py-1"
        >
          Профессиональный монтаж <br className="hidden sm:inline" />видео и спецэффекты
        </motion.h1>

        {/* Element 3: Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-[32ch] sm:max-w-[45ch]"
        >
          Видеомонтаж на заказ, саунд-дизайн, цветокоррекция для рекламы и клипов.
        </motion.p>

        {/* Element 4: CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer shadow-lg shadow-rose-500/20"
          >
            <Chat size={14} weight="fill" />
            НАПИСАТЬ
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-102 active:scale-98 cursor-pointer"
          >
            Проекты
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
