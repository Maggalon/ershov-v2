"use client";

import { motion } from "motion/react";
import { TelegramLogo, EnvelopeSimple, VideoCamera, ArrowUp } from "@phosphor-icons/react";

export default function Contact() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-black/40">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] glow-bg animate-pulse-slow opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto px-4 z-10 relative flex flex-col items-center text-center space-y-12">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
            КОНТАКТЫ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
            Давайте разберем ваш кейс
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[50ch] mx-auto">
            Проведу бесплатную консультацию и расскажу, что мешает увеличить охваты.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl pt-4">


          {/* Email Card */}
          <motion.a
            href="mailto:ershhhadd@gmail.com"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-rose-500/50 hover:bg-zinc-900/10 transition-colors group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all mb-4">
              <EnvelopeSimple size={24} />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold mb-1">
              Почта
            </span>
            <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors break-all">
              ershhhadd@gmail.com
            </span>
          </motion.a>

          {/* Telegram Card */}
          <motion.a
            href="https://t.me/kosmostas_edit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-rose-500/50 hover:bg-zinc-900/10 transition-colors group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all mb-4">
              <TelegramLogo size={24} />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold mb-1">
              Телеграм
            </span>
            <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
              @kosmostas_edit
            </span>
          </motion.a>

          {/* Portfolio Telegram Card */}
          <motion.a
            href="https://t.me/kosmostas_portfolio1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-rose-500/50 hover:bg-zinc-900/10 transition-colors group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all mb-4">
              <VideoCamera size={24} />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold mb-1">
              Портфолио
            </span>
            <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
              t.me/kosmostas_portfolio1
            </span>
          </motion.a>

        </div>

        {/* Footer info line */}
        <div className="w-full mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-zinc-500">
            © {new Date().getFullYear()} СТАНИСЛАВ ЕРШОВ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
