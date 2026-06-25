"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Play, Pause, SpeakerHigh, SpeakerSimpleSlash, X } from "@phosphor-icons/react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: "horizontal" | "vertical" | "ai";
  categoryLabel: string;
  year: string;
  roles: string[];
  video: string;
  image: string;
  aspectRatio: "horizontal" | "vertical";
}

const projectsList: Project[] = [
  {
    id: "horizontal_1",
    title: "Эхо Прошлого (VFX Showreel)",
    category: "horizontal",
    categoryLabel: "VFX / Кино",
    year: "2026",
    roles: ["3D-Композитинг", "Симуляции"],
    video: "/videos/horizontal/horizontal_1.mp4",
    image: "/intros/horizontal-1-intro.png",
    aspectRatio: "horizontal",
  },
  {
    id: "vertical_1",
    title: "Динамичный Shorts #1",
    category: "vertical",
    categoryLabel: "Shorts / Reels",
    year: "2026",
    roles: ["Монтаж", "Цветокоррекция"],
    video: "/videos/vertical/vertical_1.mp4",
    image: "/intros/vertical-1-intro.png",
    aspectRatio: "vertical",
  },
  {
    id: "ai_1",
    title: "Нейросетевая генерация",
    category: "ai",
    categoryLabel: "AI & VFX",
    year: "2026",
    roles: ["Runway Gen-3", "Креатив"],
    video: "/videos/ai/ai_1.mp4",
    image: "/project_color_grading.png",
    aspectRatio: "horizontal",
  },
  {
    id: "vertical_2",
    title: "Динамичный Shorts #2",
    category: "vertical",
    categoryLabel: "Shorts / Reels",
    year: "2026",
    roles: ["Монтаж", "Саунд-дизайн"],
    video: "/videos/vertical/vertical_2.mp4",
    image: "/intros/vertical-2-intro.png",
    aspectRatio: "vertical",
  },
  {
    id: "horizontal_2",
    title: "Пленники Тумана",
    category: "horizontal",
    categoryLabel: "ХУДОЖЕСТВЕННЫЙ ФИЛЬМ",
    year: "2025",
    roles: ["Монтаж", "Саунд-дизайн"],
    video: "/videos/horizontal/horizontal_2.mp4",
    image: "/project_cinema.png",
    aspectRatio: "horizontal",
  },
  {
    id: "vertical_3",
    title: "Динамичный Shorts #3",
    category: "vertical",
    categoryLabel: "Shorts / Reels",
    year: "2026",
    roles: ["Монтаж", "Цветокоррекция"],
    video: "/videos/vertical/vertical_3.mp4",
    image: "/project_music_video.png",
    aspectRatio: "vertical",
  },
  {
    id: "ai_2",
    title: "Интеграция ИИ",
    category: "ai",
    categoryLabel: "AI & VFX",
    year: "2026",
    roles: ["Face Swap", "Нейросети"],
    video: "/videos/ai/ai_2.mp4",
    image: "/intros/ai-2-intro.png",
    aspectRatio: "horizontal",
  },
  {
    id: "vertical_4",
    title: "Динамичный Shorts #4",
    category: "vertical",
    categoryLabel: "Shorts / Reels",
    year: "2026",
    roles: ["Монтаж", "Саунд-дизайн"],
    video: "/videos/vertical/vertical_4.mp4",
    image: "/intros/vertical-4-intro.png",
    aspectRatio: "vertical",
  },
  {
    id: "vertical_5",
    title: "Динамичный Shorts #5",
    category: "vertical",
    categoryLabel: "Shorts / Reels",
    year: "2026",
    roles: ["Монтаж", "Эффекты"],
    video: "/videos/vertical/vertical_5.mp4",
    image: "/intros/vertical-5-intro.png",
    aspectRatio: "vertical",
  },
  {
    id: "vertical_6",
    title: "Динамичный Shorts #6",
    category: "vertical",
    categoryLabel: "Shorts / Reels",
    year: "2026",
    roles: ["Монтаж", "Цветокоррекция"],
    video: "/videos/vertical/vertical_6.mp4",
    image: "/intros/vertical-6-intro.png",
    aspectRatio: "vertical",
  },
];

const categories = [
  { id: "all", label: "Все работы" },
  { id: "horizontal", label: "Горизонтальные (Кино/Реклама)" },
  { id: "vertical", label: "Вертикальные (Reels/Shorts)" },
  { id: "ai", label: "AI & VFX" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Modal player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const videoRef = useRef<HTMLVideoElement>(null);

  const horizontalAndAiProjects = projectsList.filter(
    (p) => p.aspectRatio === "horizontal" && (activeCategory === "all" || p.category === activeCategory)
  );

  const verticalProjects = projectsList.filter(
    (p) => p.aspectRatio === "vertical" && (activeCategory === "all" || p.category === activeCategory)
  );

  const openPlayer = (project: Project) => {
    setSelectedProject(project);
    setIsPlaying(false);
    setProgress(0);
  };

  const closePlayer = () => {
    setSelectedProject(null);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log("Play error: ", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);

      // Generate cinema timecode
      const minutes = Math.floor((current % 3600) / 60);
      const seconds = Math.floor(current % 60);
      const frames = Math.floor((current % 1) * 24);
      const pad = (num: number) => String(num).padStart(2, "0");
      setTimecode(`00:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePlayer();
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
              ПОРТФОЛИО
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
              Избранные проекты
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-[60ch] leading-relaxed">
              Интерактивная подборка проектов. Наведите курсор на карточку для быстрого просмотра или кликните для полноэкранного воспроизведения.
            </p>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-full w-fit max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 text-xs font-mono rounded-full transition-colors cursor-pointer ${
                activeCategory === cat.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Categorized Grid View */}
        <div className="space-y-16">
          {/* 1. Horizontal Grid Section */}
          {horizontalAndAiProjects.length > 0 && (
            <motion.div layout className="space-y-6">
              {activeCategory === "all" && (
                <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 border-b border-zinc-900 pb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  Горизонтальные проекты & VFX / Кино и Эффекты
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {horizontalAndAiProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => openPlayer(project)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* 2. Vertical Grid Section */}
          {verticalProjects.length > 0 && (
            <motion.div layout className="space-y-6">
              {activeCategory === "all" && (
                <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 border-b border-zinc-900 pb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  Вертикальные форматы / Reels & Shorts
                </h3>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <AnimatePresence mode="popLayout">
                  {verticalProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => openPlayer(project)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Fullscreen Video Modal Player */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`relative w-full max-w-5xl rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col group/player ${
                selectedProject.aspectRatio === "vertical" ? "max-h-[85vh] aspect-[9/16]" : "aspect-video"
              }`}
            >
              {/* HTML5 video element */}
              <video
                ref={videoRef}
                src={selectedProject.video}
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none opacity-0 group-hover/player:opacity-100 transition-opacity duration-300" />

              {/* Close Button */}
              <button
                onClick={closePlayer}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-rose-500 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Play Pause State Overlay */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                    <Play size={32} weight="fill" className="ml-1" />
                  </div>
                </div>
              )}

              {/* HUD Header */}
              <div className="absolute top-4 left-4 right-16 flex justify-between items-center z-10 font-mono text-[9px] md:text-xs text-zinc-400 pointer-events-none opacity-0 group-hover/player:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/40 backdrop-blur-md border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  <span>{selectedProject.title}</span>
                </div>
                <div className="px-3 py-1.5 rounded bg-black/40 backdrop-blur-md border border-white/5 text-white">
                  <span>{selectedProject.categoryLabel} ({selectedProject.year})</span>
                </div>
              </div>

              {/* Player Controls - Floating HUD */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col space-y-3 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/5 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300">
                {/* Timeline Slider */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percentage = clickX / rect.width;
                    if (videoRef.current) {
                      videoRef.current.currentTime = percentage * videoRef.current.duration;
                    }
                  }}
                  className="h-1.5 w-full bg-zinc-800 rounded-full cursor-pointer relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-rose-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Control Panel */}
                <div className="flex justify-between items-center text-xs font-mono">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-rose-500 transition-colors cursor-pointer"
                    >
                      {isPlaying ? "ПАУЗА" : "СТАРТ"}
                    </button>
                    <span className="text-zinc-500">|</span>
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-rose-500 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {isMuted ? (
                        <>
                          <SpeakerSimpleSlash size={14} />
                          <span>ЗВУК ВЫКЛ</span>
                        </>
                      ) : (
                        <>
                          <SpeakerHigh size={14} />
                          <span>ЗВУК ВКЛ</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-zinc-400">
                    TC <span className="text-white">{timecode}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.playbackRate = 1.0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const aspectClass = project.aspectRatio === "vertical" ? "aspect-[9/16]" : "aspect-video";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 flex flex-col justify-end p-5 md:p-6 cursor-pointer select-none ${aspectClass}`}
    >
      {/* Poster Image */}
      <Image
        src={project.image}
        alt={`Проект ${project.title} — пример видеомонтажа и спецэффектов от Станислава Ершова`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className={`object-cover z-0 transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-45 group-hover:scale-102"
        }`}
      />

      {/* Muted Loop Video Preview */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 pointer-events-none ${
          isHovered ? "opacity-75 scale-102" : "opacity-0"
        }`}
      />

      {/* Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10 pointer-events-none" />

      {/* Hover Arrow Icon */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
        <ArrowUpRight size={14} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col space-y-2 pointer-events-none">
        {/* Upper tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[8px] font-semibold tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">
            {project.categoryLabel}
          </span>
          <span className="font-mono text-[8px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-sm md:text-base font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors duration-200 leading-tight">
          {project.title}
        </h3>

        {/* Split line */}
        <div className="h-px bg-zinc-800/80 w-full" />

        {/* Lower Roles */}
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-zinc-400 font-mono text-[9px]">
          {project.roles.map((role, rIndex) => (
            <span key={rIndex} className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              {role}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
