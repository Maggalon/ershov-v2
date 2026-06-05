"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "ЛЕТ ОПЫТА", value: "7+" },
    { label: "ПРОЕКТОВ СДАНО", value: "80+" },
    { label: "КИНОНАГРАД", value: "3" },
    { label: "FPS НАШЕЙ ЖИЗНИ", value: "24" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
                БИОГРАФИЯ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
                За кадром истории
              </h2>
            </div>

            <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed max-w-[60ch]">
              <p>
                Привет! Меня зовут Станислав Ершов, и я помогаю режиссерам и брендам собирать сырой материал в захватывающие истории. Мой путь начался более семи лет назад, и с тех пор я успел поработать над десятками проектов — от динамичных рекламных роликов до короткометражных художественных фильмов.
              </p>
              <p>
                Я совмещаю классические техники монтажа с глубоким пониманием визуальных эффектов (VFX), композитинга и цветокоррекции. Это позволяет мне видеть картину целиком уже на этапе чернового монтажа и предлагать нестандартные творческие решения.
              </p>
              <p>
                В работе я ценю внимание к деталям, дисциплину и умение чувствовать ритм повествования. Каждый кадр, каждая склейка и звуковой акцент должны работать на общую идею и вызывать эмоции у зрителя.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-zinc-900 font-mono">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel border-zinc-800 p-2 shadow-2xl"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
              <Image
                src="/editor_portrait.png"
                alt="Станислав Ершов портрет"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-90 hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
