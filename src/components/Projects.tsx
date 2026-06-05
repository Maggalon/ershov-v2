"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  year: string;
  roles: string[];
  image: string;
  gridClass: string;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      title: "Эхо Прошлого (VFX Breakdown)",
      category: "VFX / 3D-СИМУЛЯЦИИ",
      year: "2026",
      roles: ["Симуляция частиц", "3D-Композитинг"],
      image: "/project_vfx.png",
      gridClass: "md:col-span-7 aspect-[16/10]",
    },
    {
      title: "Пленники Тумана",
      category: "ХУДОЖЕСТВЕННЫЙ ФИЛЬМ",
      year: "2025",
      roles: ["Монтаж", "Саунд-дизайн"],
      image: "/project_cinema.png",
      gridClass: "md:col-span-5 aspect-[16/10]",
    },
    {
      title: "Ночной Дрифт",
      category: "МУЗЫКАЛЬНЫЙ КЛИП",
      year: "2025",
      roles: ["Динамический монтаж", "Цветокоррекция"],
      image: "/project_music_video.png",
      gridClass: "md:col-span-5 aspect-[16/10]",
    },
    {
      title: "Гармония Света",
      category: "РЕКЛАМНЫЙ РОЛИК",
      year: "2026",
      roles: ["Цветокоррекция DaVinci", "Монтаж"],
      image: "/project_color_grading.png",
      gridClass: "md:col-span-7 aspect-[16/10]",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
            ПОРТФОЛИО
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
            Избранные работы
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-[60ch] leading-relaxed">
            Подборка проектов в сфере кино, музыкальных видеороликов и сложных визуальных эффектов.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col justify-end p-6 md:p-8 cursor-pointer ${project.gridClass}`}
            >
              {/* Asset Background */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 ease-out z-0"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Hover Arrow Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <ArrowUpRight size={18} />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col space-y-3">
                {/* Upper tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[9px] font-semibold tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <span className="font-mono text-[9px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors duration-200 leading-tight">
                  {project.title}
                </h3>

                {/* Split line */}
                <div className="h-px bg-zinc-800/80 w-full" />

                {/* Lower Roles */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-zinc-400 font-mono text-[10px]">
                  {project.roles.map((role, rIndex) => (
                    <span key={rIndex} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      {role}
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
