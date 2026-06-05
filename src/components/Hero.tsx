"use client";

import { motion } from "motion/react";
import { Play, ArrowRight, Monitor, VideoCamera } from "@phosphor-icons/react";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 md:pt-24 overflow-hidden timeline-grid">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] glow-bg animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 py-8">
        
        {/* Left column - Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-left">
          
          {/* Element 1: Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-gradient"
          >
            Создаю визуальную поэзию <br />и спецэффекты
          </motion.h1>

          {/* Element 3: Subtext (Max 20 words) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[50ch]"
          >
            Кинематографичный монтаж, фотореалистичный 3D-композитинг и глубокая цветокоррекция для тех, кто видит разницу.
          </motion.p>

          {/* Element 4: CTAs (1 primary + max 1 secondary) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection("showreel")}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer shadow-lg shadow-rose-500/20"
            >
              <Play size={14} weight="fill" />
              Смотреть шоурил
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-102 active:scale-98 cursor-pointer"
            >
              Проекты
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* Right column - Editorial Interactive Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-[5/6] max-h-[500px] flex items-center justify-center"
        >
          {/* Main Visual Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border-zinc-800 p-2 group shadow-2xl">
            {/* Inner frame mock-up */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
              <Image
                src="/project_cinema.png"
                alt="Cinematic frame preview"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Editing Suite HUD Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none p-4 flex flex-col justify-between">
                
                {/* HUD Top Bar */}
                <div className="flex justify-between items-center font-mono text-[9px] text-zinc-400">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    REC [RAW]
                  </div>
                  <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded tracking-widest">
                    23.976 FPS
                  </div>
                </div>

                {/* HUD Center Assist (Crosshair) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-6 h-px bg-white" />
                  <div className="h-6 w-px bg-white" />
                </div>

                {/* HUD Bottom Bar */}
                <div className="space-y-2">
                  {/* Waveform representation */}
                  <div className="flex items-end gap-[2px] h-6 px-2 opacity-50">
                    {[3, 5, 2, 7, 9, 4, 3, 6, 8, 2, 4, 6, 8, 4, 3, 5, 8, 9, 3, 4, 2, 6, 5, 3, 7, 8, 4].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-rose-500" 
                        style={{ height: `${h * 10}%` }} 
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center font-mono text-[9px] text-zinc-400 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded">
                    <div className="flex items-center gap-1">
                      <Monitor size={12} />
                      <span>CAM_A_002.MXF</span>
                    </div>
                    <div className="text-white tracking-widest">
                      TC: 01:24:42:12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
