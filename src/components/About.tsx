import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Sparkles,
  Trophy,
  Users,
  HeartHandshake,
  Zap,
  Camera,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import myPhoto from "../assets/images/my.jpg";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  const [yearsVal, setYearsVal] = useState(0);
  const [projectsVal, setProjectsVal] = useState(0);
  const [satVal, setSatVal] = useState(0);
  const [speedVal, setSpeedVal] = useState(0);

  const [tilt, setTilt] = useState({
    rx: 0,
    ry: 0,
  });

  const handlePointerMove = (e: React.PointerEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // Reduced tilt intensity for better performance
    const rx = ((y - cy) / cy) * -3;
    const ry = ((x - cx) / cx) * 4;

    setTilt({
      rx: Math.max(Math.min(rx, 5), -5),
      ry: Math.max(Math.min(ry, 5), -5),
    });
  };

  const resetTilt = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  useEffect(() => {
    if (!isInView) return;

    // Use requestAnimationFrame for smoother counter animations
    let yearsFrame: number;
    let projectsFrame: number;
    let satFrame: number;
    let speedFrame: number;

    const animateYears = () => {
      setYearsVal((p) => {
        if (p >= 2) return p;
        const next = p + 0.1;
        yearsFrame = requestAnimationFrame(animateYears);
        return Math.min(next, 2);
      });
    };

    const animateProjects = () => {
      setProjectsVal((p) => {
        if (p >= 20) return 20;
        const next = p + 0.5;
        projectsFrame = requestAnimationFrame(animateProjects);
        return Math.min(next, 20);
      });
    };

    const animateSat = () => {
      setSatVal((p) => {
        if (p >= 100) return 100;
        const next = p + 2;
        satFrame = requestAnimationFrame(animateSat);
        return Math.min(next, 100);
      });
    };

    const animateSpeed = () => {
      setSpeedVal((p) => {
        if (p >= 99) return 99;
        const next = p + 2;
        speedFrame = requestAnimationFrame(animateSpeed);
        return Math.min(next, 99);
      });
    };

    yearsFrame = requestAnimationFrame(animateYears);
    projectsFrame = requestAnimationFrame(animateProjects);
    satFrame = requestAnimationFrame(animateSat);
    speedFrame = requestAnimationFrame(animateSpeed);

    return () => {
      cancelAnimationFrame(yearsFrame);
      cancelAnimationFrame(projectsFrame);
      cancelAnimationFrame(satFrame);
      cancelAnimationFrame(speedFrame);
    };
  }, [isInView]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F7F3] py-24 transition-colors duration-300 dark:bg-slate-900 md:py-32"
    >
      {/* DOT BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-[0] opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(165, 160, 152, 0.50) 1.4px, transparent 1.4px)",
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

      {/* SUBTLE GLOW - Simplified */}
      <div className="pointer-events-none absolute right-[-8%] top-[8%] z-[0] h-[560px] w-[560px] rounded-full bg-black/5 blur-[150px] opacity-20" />
      <div className="pointer-events-none absolute left-[-10%] bottom-[-18%] z-[0] h-[520px] w-[520px] rounded-full bg-black/5 blur-[140px] opacity-20" />

      {/* EXTRA LIGHT */}
      <div className="pointer-events-none absolute inset-0 z-[0] bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_35%)]" />

      {/* TOP LINE */}
      <div className="absolute top-[110px] left-0 right-0 h-px bg-[#d9d4cc] z-[1] opacity-80" />

      {/* DECORATIVE STARS - Reduced */}
      <div className="absolute top-[150px] left-[90px] text-black/80 text-4xl select-none pointer-events-none z-[1]">
        ✦
      </div>
      <div className="absolute bottom-[145px] left-[245px] text-black/80 text-6xl select-none pointer-events-none z-[1]">
        ✦
      </div>

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12"
      >
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md dark:border-blue-900/60 dark:bg-blue-950/40"
          >
            <span className="text-sm font-semibold text-slate-700 dark:text-cyan-300">
              About Section
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl"
          >
            About Me
            <br />
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-400">
              Building with Passion
            </span>
          </motion.h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative mx-auto max-w-[420px]"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-black/5 via-transparent to-black/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* FLOATING BADGE */}
              <div className="absolute -right-3 top-10 z-20 rounded-2xl border border-white/40 bg-white/75 px-4 py-3 shadow-xl backdrop-blur-xl dark:bg-slate-950/60">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Available For
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Freelance
                </p>
              </div>

              {/* CARD */}
              <div
                ref={cardRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={resetTilt}
                className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/55 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900/70"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                  willChange: "transform",
                }}
              >
                {/* TOP BADGES */}
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/70 px-3 py-1 backdrop-blur-md dark:border-blue-900/50 dark:bg-slate-950/55">
                    <Camera className="h-3.5 w-3.5 text-slate-700 dark:text-cyan-400" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 dark:text-cyan-300">
                      Photo Area
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/70 px-3 py-1 backdrop-blur-md dark:border-blue-900/50 dark:bg-slate-950/55">
                    <MapPin className="h-3.5 w-3.5 text-slate-700 dark:text-cyan-400" />
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                      Indonesia
                    </span>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={myPhoto}
                    alt="Moh. Chandra Wardana"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* BOTTOM */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-200/90">
                          Moh. Chandra Wardana
                        </p>
                        <h3 className="mt-1 text-2xl font-black tracking-tight text-white">
                          Full Stack Developer
                        </h3>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                      Telkom University · S1 Informatics Engineering
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold leading-relaxed tracking-[-0.02em] text-slate-900 dark:text-white md:text-2xl"
              >
                Building digital products that are fast, scalable, and designed
                for real users.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base leading-[1.9] tracking-[-0.01em] text-slate-600 dark:text-slate-300 md:text-lg"
              >
                I'm Moh. Chandra Wardana, a Full Stack Developer passionate
                about turning ideas into reliable digital solutions. From
                intuitive user interfaces to robust backend architecture, I
                focus on building products that solve real problems, deliver
                seamless experiences, and scale with business growth.
              </motion.p>

              {/* PILLS */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Clean API architectures",
                  "Fluid micro-interactions",
                  "Responsive layouts",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200"
                  >
                    <div className="h-2 w-2 rounded-full bg-slate-700 dark:bg-cyan-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                {
                  icon: Trophy,
                  value: yearsVal,
                  suffix: "+",
                  title: "Experience",
                  desc: "Engineering",
                  color: "text-slate-700 dark:text-cyan-400",
                },
                {
                  icon: Zap,
                  value: projectsVal,
                  suffix: "+",
                  title: "Projects",
                  desc: "Completed",
                  color: "text-amber-500",
                },
                {
                  icon: Users,
                  value: satVal,
                  suffix: "%",
                  title: "Freelance",
                  desc: "Available",
                  color: "text-green-500",
                },
                {
                  icon: HeartHandshake,
                  value: speedVal,
                  suffix: "%",
                  title: "Fast",
                  desc: "Learner",
                  color: "text-rose-500",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.06,
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/65 px-4 py-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-slate-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/40 dark:hover:border-cyan-400/40"
                  >
                    <div className="absolute right-0 top-0 h-10 w-10 rounded-full bg-white/5 blur-lg" />

                    <Icon className={`mb-3 h-5 w-5 ${item.color}`} />

                    <div className="mb-1 flex items-baseline">
                      <span className="text-2xl font-black leading-none text-slate-950 dark:text-white">
                        {item.value}
                      </span>
                      <span
                        className={`ml-0.5 text-sm font-bold ${item.color}`}
                      >
                        {item.suffix}
                      </span>
                    </div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
