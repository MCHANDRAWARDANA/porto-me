import React from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Instagram, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const topLinks = [
    {
      label: "Email",
      icon: Mail,
      url: `mailto:mohchandrawardana@gmail.com`,
      text: "mohchandrawardana@gmail.com",
      col: "text-slate-700 dark:text-cyan-400",
      hoverBorder: "hover:border-slate-300 dark:hover:border-slate-700/60",
      hoverShadow: "hover:shadow-black/10",
    },
    {
      label: "WhatsApp",
      icon: FaWhatsapp,
      url: `https://wa.me/628588661370`,
      text: "0858-8661-370",
      col: "text-green-500 dark:text-green-400",
      hoverBorder: "hover:border-green-300 dark:hover:border-green-700/60",
      hoverShadow: "hover:shadow-green-500/15",
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      icon: Github,
      url: "https://github.com/MCHANDRAWARDANA",
      col: "text-slate-900 dark:text-white",
      hoverBorder: "hover:border-slate-300 dark:hover:border-slate-600",
      hoverShadow: "hover:shadow-black/10 dark:hover:shadow-white/10",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohchandrawardana/",
      col: "text-blue-500",
      hoverBorder: "hover:border-blue-300 dark:hover:border-blue-600",
      hoverShadow: "hover:shadow-blue-500/15",
    },
    {
      label: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/mchandraw_/",
      col: "text-pink-500",
      hoverBorder: "hover:border-pink-300 dark:hover:border-pink-600",
      hoverShadow: "hover:shadow-pink-500/15",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F7F3] py-24 transition-colors duration-300 md:py-32"
    >
      {/* DOT BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(165, 160, 152, 0.5) 1.4px, transparent 1.4px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 78%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 78%, transparent 100%)",
        }}
      />

      {/* SOFT FADE */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(248,247,243,0.35)_100%)]" />

      {/* TOP LINE */}
      <div className="absolute top-[110px] left-0 right-0 h-px bg-[#d9d4cc] z-[1] opacity-80" />

      {/* DECORATIVE STARS */}
      <div className="pointer-events-none absolute top-[150px] left-[90px] z-[1] select-none text-black/80 text-4xl">
        ✦
      </div>
      <div className="pointer-events-none absolute top-[230px] left-[250px] z-[1] select-none text-black/45 text-xl">
        ✦
      </div>
      <div className="pointer-events-none absolute top-[180px] right-[180px] z-[1] select-none text-black/70 text-3xl">
        ✦
      </div>
      <div className="pointer-events-none absolute top-[420px] right-[320px] z-[1] select-none text-black/40 text-2xl">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[260px] left-[140px] z-[1] select-none text-black/60 text-3xl">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[160px] left-[340px] z-[1] select-none text-black/45 text-xl">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[120px] right-[160px] z-[1] select-none text-black/65 text-4xl">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[80px] right-[420px] z-[1] select-none text-black/35 text-xl">
        ✦
      </div>

      {/* SOFT GLOWS */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.16, 0.28, 0.16],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/4 right-0 z-0 h-96 w-96 rounded-full bg-black/5 blur-[130px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.14, 0.24, 0.14],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-1/4 left-10 z-0 h-96 w-96 rounded-full bg-black/5 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="mb-5 inline-flex cursor-default items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm transition-colors duration-300"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-slate-700" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-slate-700">
              Let&apos;s Connect
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl"
          >
            Got a project in mind?
            <span className="mt-1 block bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Let&apos;s make it happen.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Open for collaborations, freelance work, or just a friendly chat.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center gap-14">
          {/* Email & WhatsApp */}
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7">
            {topLinks.map((link, idx) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/75 px-6 py-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/40 ${link.hoverBorder} ${link.hoverShadow}`}
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.2,
                    }}
                    className="pointer-events-none absolute inset-0 z-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10"
                  />

                  <div className="relative z-10 flex items-center justify-center rounded-xl bg-slate-100/70 p-2 transition-colors group-hover:bg-transparent dark:bg-slate-900/50">
                    <Icon
                      className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 md:h-7 md:w-7 ${link.col}`}
                    />
                  </div>

                  <span className="relative z-10 text-sm font-semibold text-slate-700 md:text-base dark:text-slate-200">
                    {link.text}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + idx * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/75 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl md:h-20 md:w-20 dark:border-slate-800 dark:bg-slate-950/40 ${social.hoverBorder} ${social.hoverShadow}`}
                >
                  <Icon
                    className={`h-7 w-7 transition-all duration-300 group-hover:scale-110 md:h-8 md:w-8 ${social.col}`}
                  />

                  <span className="pointer-events-none absolute -bottom-12 left-1/2 z-20 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-lg border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-bold tracking-wide text-slate-700 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-800/95 dark:text-slate-200">
                    {social.label}
                    <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-slate-200 bg-white/95 dark:border-slate-700 dark:bg-slate-800/95" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
