"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, SpeakerHigh, SpeakerSimpleSlash, CornersOut, X, Info } from "@phosphor-icons/react";
import Image from "next/image";

export default function Showreel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cinematic direct video URL (local showreel video)
  const videoUrl = "/videos/horizontal/horizontal_1.mp4";

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Video play error: ", err));
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

      // Generate cinema-style timecode (HH:MM:SS:FF where FF is frames at 24fps)
      const hours = Math.floor(current / 3600);
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
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section id="showreel" className="py-20 md:py-28 relative overflow-hidden bg-black/40">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-bg animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="flex flex-col space-y-12">
          
          {/* Header */}
          <div className="flex flex-col space-y-4 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
              СМОТРЕТЬ РАБОТЫ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
              Шоурил видеомонтажа 2026
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-[65ch] leading-relaxed">
              Короткая компиляция лучших кадров, визуальных эффектов и монтажных склеек. Нажмите на плеер для запуска полноэкранного просмотра.
            </p>
          </div>

          {/* Cinematic Mockup Player */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={toggleModal}
            className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 shadow-2xl bg-zinc-950"
          >
            {/* Backdrop thumbnail image */}
            <Image
              src="/intros/horizontal-1-intro.png"
              alt="Постер шоурила Станислава Ершова — примеры монтажа видео и спецэффектов"
              fill
              className="object-cover opacity-70 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />

            {/* Ambient vignette shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 flex flex-col justify-between p-4 md:p-8" />

            {/* Upper HUD overlay */}
            <div className="absolute top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 flex justify-between items-center z-10 font-mono text-[9px] md:text-xs text-zinc-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/40 backdrop-blur-md border border-white/5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>DEMO_REEL_2026.MOV</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/40 backdrop-blur-md border border-white/5 text-white">
                <span>00:02:14:00</span>
              </div>
            </div>

            {/* Play trigger overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-rose-500/30"
              >
                <Play size={28} weight="fill" className="ml-1" />
              </motion.div>
            </div>

            {/* Lower HUD overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex justify-between items-center z-10 font-mono text-[9px] md:text-xs text-zinc-400">
              <div className="px-3 py-1.5 rounded bg-black/40 backdrop-blur-md border border-white/5">
                <span>STEREO / 48KHZ</span>
              </div>
              <div className="px-3 py-1.5 rounded bg-black/40 backdrop-blur-md border border-white/5">
                <span>RED MONSTRO 8K</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          >
            {/* Main Video Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col group/player"
            >
              {/* HTML5 video element */}
              <video
                ref={videoRef}
                src={videoUrl}
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Black gradient overlay inside player */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none opacity-0 group-hover/player:opacity-100 transition-opacity duration-300" />

              {/* Close Button */}
              <button 
                onClick={toggleModal}
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

                  <div className="flex items-center gap-4">
                    <div className="text-zinc-400">
                      TC <span className="text-white">{timecode}</span>
                    </div>
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
