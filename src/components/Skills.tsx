import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  Sparkles,
  Smartphone,
  Server,
  Palette,
  Code2,
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

// Accurate, beautifully-drawn inline SVG logos for each of the requested tech options
const TechLogos: Record<string, React.FC<{ className?: string }>> = {
  "React.js": () => (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      className="h-full w-full"
      fill="currentColor"
    >
      <circle cx="0" cy="0" r="2.05" fill="#58c4dc" />
      <g stroke="#58c4dc" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  "Next.js": () => (
    <svg viewBox="0 0 180 180" className="h-full w-full" fill="none">
      <ellipse cx="90" cy="90" rx="85" ry="85" fill="black" stroke="none" />
      <ellipse
        cx="90"
        cy="90"
        rx="80"
        ry="80"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      <path
        d="M140 140 L84.5 64.5 L73 78.5"
        stroke="url(#nextGradient)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M120 60 L120 140"
        stroke="url(#nextGradient2)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="nextGradient"
          x1="140"
          y1="140"
          x2="84"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="nextGradient2"
          x1="120"
          y1="60"
          x2="120"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M12 5.5c-2.4 0-4 1.2-4.8 3.6.9-1.2 2-1.6 3.3-1.2 1 .3 1.7 1 2.5 1.8C14.3 11 15.8 12.5 19 12.5c2.4 0 4-1.2 4.8-3.6-.9 1.2-2 1.6-3.3 1.2-1-.3-1.7-1-2.5-1.8C16.7 7 15.2 5.5 12 5.5zm-7 7c-2.4 0-4 1.2-4.8 3.6.9-1.2 2-1.6 3.3-1.2 1 .3 1.7 1 2.5 1.8C7.3 18 8.8 19.5 12 19.5c2.4 0 4-1.2 4.8-3.6-.9 1.2-2 1.6-3.3 1.2-1-.3-1.7-1-2.5-1.8C8.7 14 7.2 12.5 5 12.5z"
        fill="#38bdf8"
        stroke="none"
      />
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 100 100" className="h-full w-full" fill="currentColor">
      <rect width="100" height="100" fill="#3178c6" rx="10" />
      <text
        x="50"
        y="80"
        fontSize="38"
        fontFamily="system-ui, sans-serif"
        fontWeight="900"
        fill="white"
      >
        TS
      </text>
    </svg>
  ),
  "Node.js": () => (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 2.5l5.5 3.1v6.2L12 17l-5.5-3.2v-6.2L12 4.5z"
        fill="#339933"
        stroke="none"
      />
      <path
        d="M12 7l4 2.2v4.5L12 16l-4-2.3V9.2"
        stroke="#539e43"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Express.js": () => (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <text
        x="2"
        y="16"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
        fontWeight="bold"
        letterSpacing="-0.5"
      >
        EXPRESS
      </text>
      <circle cx="21" cy="13" r="2" fill="#58c4dc" />
    </svg>
  ),
  MySQL: () => (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 6c0 1.66 3.58 3 8 3s8-1.34 8-3V6.5c-1.5 1.5-4.5 2.5-8 2.5s-6.5-1-8-2.5V12zm0 6c0 1.66 3.58 3 8 3s8-1.34 8-3v-5.5c-1.5 1.5-4.5 2.5-8 2.5s-6.5-1-8-2.5V18z"
        fill="#00758f"
        stroke="none"
      />
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 128 128" className="h-full w-full">
      <path
        d="M123.6 13C116.5 6.6 102.3.8 89.4.1c-15.6-.9-31.5 5.5-39.7 15.4-3-3.6-7.3-6.2-11.7-7.2-7.8-1.7-16 1.3-21.7 6.4-1.4 1.2-2.3 2.9-2.2 4.7.1 1.8 1.1 3.4 2.7 4.1 3 1.4 6 3 8.7 5 3.3.8 6.4 2.2 9.1 4.2-1.3.8-2.5 1.7-3.7 2.7-5.5 4.6-9.1 11-10.4 18-3.4-.6-6.8-1.7-10.1-3.2-1.5-.7-3.3-.6-4.7.3S-.6 53.3-.1 55c1.8 5.7 5.2 10.9 9.6 15 1.6 1.3 2.6 3.2 2.7 5.2.2 3.8.3 7.6.4 11.4.1 4.9.4 9.8 1 14.7 1 8.2 2.8 16.2 5.5 24 1.3 3.8 3 7.5 5 11.1.9 1.6 2.5 2.6 4.3 2.6 1.5 0 3-.7 3.9-2L48 116.6c2.4-3.1 5.2-5.9 8.3-8.3 4.1.8 8.2 1.2 12.4 1.2s8.2-.4 12.4-1.2c3.1 2.4 5.9 5.2 8.3 8.3L105 137c.9 1.2 2.4 2 3.9 2 1.8 0 3.4-1 4.3-2.6 2-3.6 3.7-7.3 5-11.1 2.7-7.8 4.5-15.8 5.5-24 .6-4.9.9-9.8 1-14.7.1-3.8.2-7.6.4-11.4.1-2 1.1-3.9 2.7-5.2 4.4-4.1 7.8-9.3 9.6-15 .5-1.7 0-3.5-1.3-4.7s-3.2-1.5-4.7-.3c-3.3 1.5-6.7 2.6-10.1 3.2-1.3-7-4.9-13.4-10.4-18-1.2-1-2.4-1.9-3.7-2.7 2.7-2 5.8-3.4 9.1-4.2 2.7-2 5.7-3.6 8.7-5 1.6-.7 2.6-2.3 2.7-4.1.1-1.8-.8-3.5-2.2-4.7z"
        fill="#336791"
      />
    </svg>
  ),
  Docker: () => (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M2.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S4.83 13 4 13s-1.5-.67-1.5-1.5zm3.5-5c0-.83.67-1.5 1.5-1.5S9 5.67 9 6.5 8.33 8 7.5 8 6 7.33 6 6.5zm4.5 0C10.5 5.67 11.17 5 12 5s1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5zm4.5 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S17.83 8 17 8s-1.5-.67-1.5-1.5zM6 11.5c0-.83.67-1.5 1.5-1.5S9 10.67 9 11.5s-.67 1.5-1.5 1.5S6 12.33 6 11.5zm4.5 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm4.5 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm4.5-5c0-.83.67-1.5 1.5-1.5S21 5.67 21 6.5 20.33 8 19.5 8 18 7.33 18 6.5zm-1.5 10c0-1.93 1.57-3.5 3.5-3.5h.5v.5c0 1.93-1.57 3.5-3.5 3.5h-.5v-.5z"
        fill="#2496ed"
        stroke="none"
      />
      <path
        d="M1 18c0-3.3 3.7-6 8-6s8 2.7 8 6-3.7 6-8 6-8-2.7-8-6z"
        fill="#2496ed"
        stroke="none"
        opacity="0.6"
      />
    </svg>
  ),
  Flutter: () => (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M14.3 2.3L20 8h-5.7l-5.7-5.7L14.3 2.3zm-5.7 5.7L14.3 13.7v5.7L8.6 13.7 2.9 8"
        fill="#02569b"
        stroke="none"
      />
      <path d="M14.3 12.3L20 18H14.3l-5.7-5.7" fill="#0175c2" stroke="none" />
    </svg>
  ),
  Golang: () => (
    <svg viewBox="0 0 128 128" className="h-full w-full">
      <path
        d="M84.6 50.3c-1.7-.3-3.4-.5-5.2-.5-17.6 0-31.9 11.3-31.9 25.2 0 13.9 14.3 25.2 31.9 25.2 17.6 0 31.9-11.3 31.9-25.2 0-4.8-1.7-9.3-4.8-13.1"
        fill="#00ACD7"
      />
      <path
        d="M84.6 50.3c-1.7-.3-3.4-.5-5.2-.5-17.6 0-31.9 11.3-31.9 25.2 0 13.9 14.3 25.2 31.9 25.2 17.6 0 31.9-11.3 31.9-25.2 0-4.8-1.7-9.3-4.8-13.1"
        fill="#5DC9E2"
      />
      <path
        d="M74.3 58.9c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3 12.3-5.5 12.3-12.3-5.5-12.3-12.3-12.3z"
        fill="#FFFFFF"
      />
      <path
        d="M94.8 58.9c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3 12.3-5.5 12.3-12.3-5.5-12.3-12.3-12.3z"
        fill="#FFFFFF"
      />
      <path
        d="M58.8 68.8c-.6-1.8-1.9-3.3-3.6-4.3-2.8-1.6-6.2-1.6-9 0-1.7 1-3 2.5-3.6 4.3-1.1 3.1-.5 6.5 1.6 9.1 2 2.5 5 4 8.2 4 3.2 0 6.2-1.5 8.2-4 2.1-2.6 2.7-6 1.6-9.1z"
        fill="#00ACD7"
      />
    </svg>
  ),
};

// marquee removed per request

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "frontend" | "backend" | "mobile" | "tools"
  >("all");

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  const categories = [
    { label: "All Stack", id: "all", icon: Sparkles },
    { label: "Frontend", id: "frontend", icon: Palette },
    { label: "Backend", id: "backend", icon: Server },
    { label: "Mobile", id: "mobile", icon: Smartphone },
    { label: "DevOps & Tools", id: "tools", icon: Layers },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F8F7F3] py-24 transition-colors duration-300 md:py-32"
    >
      {/* DOT BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-[0] opacity-90"
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
      <div className="pointer-events-none absolute inset-0 z-[0] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(248,247,243,0.35)_100%)]" />

      {/* TOP LINE */}
      <div className="absolute top-[110px] left-0 right-0 h-px bg-[#d9d4cc] z-[1] opacity-80" />

      {/* DECORATIVE STARS */}
      <div className="absolute top-[150px] left-[90px] text-black/80 text-4xl select-none pointer-events-none z-[1]">
        ✦
      </div>
      <div className="absolute top-[325px] right-[230px] text-black/70 text-5xl select-none pointer-events-none z-[1]">
        ✦
      </div>
      <div className="absolute top-[460px] right-[330px] text-black/45 text-3xl select-none pointer-events-none z-[1]">
        ✦
      </div>
      <div className="absolute bottom-[145px] left-[245px] text-black/80 text-6xl select-none pointer-events-none z-[1]">
        ✦
      </div>
      <div className="absolute bottom-[90px] left-[400px] text-black/45 text-3xl select-none pointer-events-none z-[1]">
        ✦
      </div>

      {/* Subtle soft glow */}
      <div className="pointer-events-none absolute top-20 left-[-120px] h-[320px] w-[320px] rounded-full bg-black/5 blur-[140px] z-[0]" />
      <div className="pointer-events-none absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-black/5 blur-[140px] z-[0]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Header Block */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center space-x-2 rounded-full border border-[#e6e1d8] bg-white/70 px-3 py-1 backdrop-blur-sm"
          >
            <Code2 className="h-3.5 w-3.5 text-slate-700" />
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-700 uppercase">
              My Tech Ecosystem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl"
          >
            Pristine Stack,
            <span className="block bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Elite Software Architecture
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base"
          >
            I specialize in type-safe stacks, fast interfaces, and modular
            systems built for real-world product development.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`relative flex cursor-pointer items-center space-x-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-black/10 scale-105"
                    : "bg-white/75 text-slate-600 border border-[#e6e1d8] backdrop-blur-sm hover:border-slate-400/40 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-slate-900"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <Icon
                  className={`relative h-4 w-4 ${isActive ? "text-white" : "text-slate-600"}`}
                />
                <span className="relative">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => {
              const LogoComp = TechLogos[skill.name];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, delay: idx * 0.02 }}
                  key={skill.name}
                  className="group relative cursor-pointer rounded-2xl bg-gradient-to-br from-[#e9e4db] to-[#dcd7cf] p-[1px] transition-all duration-500 hover:from-slate-700 hover:to-slate-900"
                >
                  <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/30 bg-white/85 p-4 text-center backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/90">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-transparent to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-slate-900 to-slate-600 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10" />

                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6e1d8] bg-gradient-to-br from-slate-50 to-slate-100 p-1.5 shadow-sm transition-all duration-300 group-hover:shadow-md"
                    >
                      {LogoComp ? (
                        <div className="h-full w-full">
                          <LogoComp />
                        </div>
                      ) : (
                        <div className="h-full w-full rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700" />
                      )}
                    </motion.div>

                    <h3 className="font-black text-xs leading-tight text-slate-800 md:text-sm">
                      {skill.name}
                    </h3>

                    <div className="mt-1.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">
                        {skill.category}
                      </span>
                    </div>

                    <div className="mt-3 h-px w-8 bg-gradient-to-r from-transparent via-slate-500/30 to-transparent transition-all duration-300 group-hover:via-slate-700/60" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#e6e1d8] bg-white/70 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-slate-700" />
            <span className="text-xs font-mono text-slate-600">
              {filteredSkills.length} technologies mastered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
