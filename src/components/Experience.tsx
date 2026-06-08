import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Building2, Sparkles } from "lucide-react";

import telkomLogo from "../assets/images/telkom.png";
import wiratekLogo from "../assets/images/wiratek.jpg";
import hmifLogo from "../assets/images/hmif.jpg";

const experiencesData = [
  {
    id: 1,
    role: "S1 Informatics Engineering",
    company: "Telkom University",
    period: "2025 - Present",
    image: telkomLogo,
    description: [
      "Focused on software engineering, web systems, and modern application architecture.",
      "Actively exploring frontend engineering, backend systems, and scalable digital products.",
      "Building real-world portfolio projects and strengthening problem-solving skills.",
    ],
    tags: ["React", "TypeScript", "UI/UX", "Software Engineering"],
  },
  {
    id: 2,
    role: "Fullstack Developer Intern",
    company: "Wiratek Solusi Asia",
    period: "Aug 2024 - Nov 2024",
    image: wiratekLogo,
    description: [
      "Developed responsive frontend interfaces and scalable backend integrations.",
      "Collaborated with development teams to build commercial web solutions.",
      "Improved debugging, API integration, and fullstack workflow experience.",
    ],
    tags: ["Fullstack", "REST API", "Frontend", "Backend"],
  },
  {
    id: 3,
    role: "Kominfo (IT Team)",
    company: "Himpunan Mahasiswa Informatika (HMIF)",
    period: "Jan 2026 - Present",
    image: hmifLogo,
    description: [
      "Managing digital systems and supporting internal technical operations.",
      "Contributing to media, information systems, and technology-based activities.",
      "Collaborating with organizational teams to improve communication workflows.",
    ],
    tags: ["IT Team", "Organization", "Communication", "Systems"],
  },
];

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={scrollRef}
      className="relative overflow-hidden bg-[#F8F7F3] py-28 transition-colors duration-300 md:py-36"
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

      {/* SOFT GLOWS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-[0]">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-black/5 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 20, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-black/5 blur-[120px]"
        />
      </div>

      {/* DECORATIVE STARS */}
      <div className="pointer-events-none absolute top-[110px] left-[70px] z-[1] text-black/85 text-3xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute top-[180px] left-[180px] z-[1] text-black/50 text-xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute top-[260px] right-[120px] z-[1] text-black/75 text-4xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute top-[420px] right-[260px] z-[1] text-black/40 text-2xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[180px] left-[110px] z-[1] text-black/70 text-5xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[120px] left-[280px] z-[1] text-black/45 text-2xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[90px] right-[160px] z-[1] text-black/60 text-3xl select-none">
        ✦
      </div>
      {/* EXTRA STARS */}
      <div className="pointer-events-none absolute top-[90px] right-[420px] z-[1] text-black/35 text-xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[140px] left-[420px] z-[1] text-black/55 text-2xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[320px] left-[80px] z-[1] text-black/45 text-xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[500px] left-[220px] z-[1] text-black/60 text-3xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[580px] right-[320px] z-[1] text-black/40 text-2xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[300px] left-[420px] z-[1] text-black/50 text-xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[260px] right-[80px] z-[1] text-black/65 text-4xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[400px] right-[450px] z-[1] text-black/35 text-xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[140px] left-[520px] z-[1] text-black/55 text-2xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[80px] right-[520px] z-[1] text-black/45 text-xl select-none">
        ✦
      </div>
      {/* CENTER STARS */}
      <div className="pointer-events-none absolute top-[220px] left-1/2 -translate-x-[180px] z-[1] text-black/45 text-xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[340px] left-1/2 translate-x-[140px] z-[1] text-black/60 text-2xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[520px] left-1/2 -translate-x-[220px] z-[1] text-black/40 text-lg select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[680px] left-1/2 translate-x-[200px] z-[1] text-black/50 text-3xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute top-[900px] left-1/2 -translate-x-[150px] z-[1] text-black/35 text-xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[650px] left-1/2 translate-x-[170px] z-[1] text-black/55 text-2xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[450px] left-1/2 -translate-x-[240px] z-[1] text-black/45 text-xl select-none">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[220px] left-1/2 translate-x-[120px] z-[1] text-black/65 text-3xl select-none">
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="mb-5 inline-flex cursor-default items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/60 px-4 py-1.5 shadow-[0_2px_10px_rgba(59,130,246,0.1)] backdrop-blur-xl transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-slate-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
              Experience Timeline
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl"
          >
            Building Digital
            <span className="mt-2 block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
              Experiences & Innovation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base"
          >
            My educational journey, internship experience, and organizational
            contributions in technology and software development.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Base Line */}
          <div className="absolute bottom-0 left-5 top-0 w-[2px] -translate-x-1/2 bg-slate-200/80 md:left-1/2" />

          {/* Animated Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-5 top-0 z-10 w-[4px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 shadow-[0_0_30px_rgba(0,0,0,0.18)] md:left-1/2"
          />

          <div className="space-y-24 md:space-y-20">
            {experiencesData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`group relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className="w-full pl-16 md:w-1/2 md:px-10 md:pl-0">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? 50 : -50,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:border-slate-300/80 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] dark:border-slate-800 dark:bg-slate-950/50 md:p-8"
                    >
                      {/* Glow */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />
                      </div>

                      {/* Accent */}
                      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Header */}
                      <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 backdrop-blur-sm">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50/80 px-3 py-1 text-sm font-medium text-slate-500">
                          <Building2 className="h-4 w-4" />
                          {exp.company}
                        </div>
                      </div>

                      {/* Logo + Role */}
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-black/10">
                          <img
                            src={exp.image}
                            alt={`${exp.company} Logo`}
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="pt-1">
                          <h3 className="text-xl font-black leading-tight text-slate-950 transition-colors duration-300 group-hover:text-slate-700 md:text-2xl">
                            {exp.role}
                          </h3>

                          <p className="mt-1.5 text-sm font-medium text-slate-500">
                            Professional & Academic Experience
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="relative z-10 mt-7 space-y-3.5">
                        {exp.description?.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="group/bullet flex items-start text-sm leading-relaxed text-slate-600"
                          >
                            <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500/50 transition-all duration-300 group-hover/bullet:scale-[1.8] group-hover/bullet:bg-slate-700" />
                            <span className="transition-colors duration-300 group-hover/bullet:text-slate-900">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="relative z-10 mt-7 flex flex-wrap gap-2 border-t border-slate-200/60 pt-6">
                        {exp.tags?.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                            }}
                            className="cursor-default rounded-xl border border-slate-200/80 bg-white/70 px-3 py-1.5 font-mono text-[11px] font-medium text-slate-500 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-10 z-20 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-125 md:left-1/2">
                    <motion.div
                      whileInView={{
                        scale: [0.8, 1.15, 1],
                      }}
                      transition={{ duration: 0.6 }}
                      className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-colors duration-300 group-hover:border-slate-200"
                    >
                      <div className="absolute inset-0 animate-ping rounded-full bg-slate-500/15 opacity-60" />
                      <div className="h-4 w-4 rounded-full bg-gradient-to-r from-slate-900 to-slate-600 shadow-[0_0_10px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:shadow-[0_0_18px_rgba(0,0,0,0.25)]" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden w-1/2 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
