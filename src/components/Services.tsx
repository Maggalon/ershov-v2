"use client";

import { motion } from "motion/react";
import { Scissors, Sparkle, Palette, Waveform } from "@phosphor-icons/react";

interface Service {
  title: string;
  description: string;
  tools: string[];
  features: string[];
  icon: React.ReactNode;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Режиссура монтажа",
      description: "Нарезка сцен, удержание темпа, создание ритмического рисунка для фильмов, рекламы и музыкальных клипов.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      features: ["Монтаж сцен", "Черновые сборки", "Трейлеры / Тизеры"],
      icon: <Scissors size={32} className="text-rose-500" />,
    },
    {
      title: "Визуальные эффекты",
      description: "Интеграция 3D-графики, фотореалистичный композитинг, симуляции частиц (дым, взрывы), замена фонов (хромакей) и удаление нежелательных объектов.",
      tools: ["After Effects", "Cinema 4D", "Blender"],
      features: ["3D-Композитинг", "Клинап кадра", "Симуляции и системы частиц"],
      icon: <Sparkle size={32} className="text-rose-500" />,
    },
    {
      title: "Цветокоррекция",
      description: "Профессиональная работа с цветом. Создание уникальной атмосферы кадра, сведение камер по экспозиции, балансу белого и стилизация финального изображения.",
      tools: ["DaVinci Resolve Studio", "ACES Pipeline"],
      features: ["Создание LUT", "Калибровка баланса", "Художественная стилизация"],
      icon: <Palette size={32} className="text-rose-500" />,
    },
    {
      title: "Саунд-дизайн",
      description: "Наполнение видео звуковыми эффектами, монтаж голосов и диалогов, создание плотного атмосферного фона и подготовка сбалансированного микса.",
      tools: ["Reaper", "Adobe Audition"],
      features: ["Foley-эффекты", "Монтаж диалогов", "Сведение звукового полотна"],
      icon: <Waveform size={32} className="text-rose-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
            УСЛУГИ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
            Услуги монтажа и VFX
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-[60ch] leading-relaxed">
            Полный цикл постпродакшена на заказ — от чернового монтажа видео до цветокоррекции, сведения звука и финального рендера.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full space-y-6"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold tracking-tight text-white leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Specs and tags list */}
              <div className="space-y-4 pt-4 border-t border-zinc-900 font-mono">
                {/* Bullet details */}
                <ul className="space-y-1.5 text-[10px] text-zinc-500">
                  {service.features.map((feat, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-rose-500/60" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Software tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((tool, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[9px] font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
