"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TelegramLogo, EnvelopeSimple, VideoCamera, ArrowUp } from "@phosphor-icons/react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, submit logic goes here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Direct Links & Text */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-500 font-semibold">
                КОНТАКТЫ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
                Давайте разберем ваш кейс
              </h2>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[40ch]">
                Есть идея для клипа или рекламного ролика? Напишите мне, и мы обсудим детали сотрудничества.
              </p>
            </div>

            {/* Direct Social Channels */}
            <address className="space-y-4 not-italic">
              <a
                href="https://t.me/kosmostas_edit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 hover:bg-zinc-900/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all">
                  <TelegramLogo size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Телеграм</div>
                  <div className="text-sm text-zinc-300 font-medium group-hover:text-white">@kosmostas_edit</div>
                </div>
              </a>

              <a
                href="mailto:ershhhadd@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 hover:bg-zinc-900/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all">
                  <EnvelopeSimple size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Почта</div>
                  <div className="text-sm text-zinc-300 font-medium group-hover:text-white">ershhhadd@gmail.com</div>
                </div>
              </a>

              <a
                href="https://t.me/kosmostas_portfolio1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 hover:bg-zinc-900/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all">
                  <VideoCamera size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Портфолио</div>
                  <div className="text-sm text-zinc-300 font-medium group-hover:text-white">t.me/kosmostas_portfolio1</div>
                </div>
              </a>
            </address>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 md:p-8 border-zinc-800">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Алексей Иванов"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors text-sm font-sans"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alexey@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors text-sm font-sans"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите ваш проект..."
                    className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors text-sm font-sans resize-none"
                  />
                </div>

                {/* Form feedback */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]"
                  >
                    Сообщение отправлено! Я свяжусь с вами в ближайшее время.
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-lg shadow-rose-500/10 border border-transparent"
                >
                  Отправить заявку
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* Footer info line */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
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
