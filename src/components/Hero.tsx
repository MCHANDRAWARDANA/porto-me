import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, FolderGit2, CheckCircle2, Cpu, Smartphone } from "lucide-react";

import developerPortrait from "../assets/images/c.png";

interface HeroProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export default function Hero({
  onScrollToProjects,
  onScrollToContact,
}: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePos({ x, y });
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const imageParallaxX = isMobile ? mousePos.x * 8 : mousePos.x * 18;
  const imageParallaxY = isMobile ? mousePos.y * 8 : mousePos.y * 18;

  const element1X = isMobile ? mousePos.x * -8 : mousePos.x * -18;
  const element1Y = isMobile ? mousePos.y * -5 : mousePos.y * -12;

  const element2X = isMobile ? mousePos.x * 8 : mousePos.x * 18;
  const element2Y = isMobile ? mousePos.y * 5 : mousePos.y * 12;

  const element3X = isMobile ? mousePos.x * -5 : mousePos.x * -10;
  const element3Y = isMobile ? mousePos.y * -5 : mousePos.y * -10;

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, -60]);
  const yImage = useTransform(scrollY, [0, 600], [0, 40]);

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#F8F7F3] transition-colors duration-300 flex items-center justify-center pt-24 sm:pt-28 pb-14"
    >
      {/* DOT BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(165, 160, 152, 0.52) 1.4px, transparent 1.4px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 80%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 80%, transparent 100%)",
        }}
      />

      {/* SOFT FADE */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(248,247,243,0.35)_100%)]" />

      {/* TOP HORIZONTAL LINE */}
      <div className="absolute top-[110px] left-0 right-0 h-px bg-[#d9d4cc] z-0 opacity-80" />

      {/* DECORATIVE STARS */}
      <div className="absolute top-[150px] left-[90px] text-black/85 text-4xl select-none pointer-events-none z-0">
        ✦
      </div>

      <div className="absolute top-[325px] right-[230px] text-black/75 text-5xl select-none pointer-events-none z-0">
        ✦
      </div>

      <div className="absolute top-[460px] right-[330px] text-black/45 text-3xl select-none pointer-events-none z-0">
        ✦
      </div>

      <div className="absolute bottom-[145px] left-[245px] text-black/85 text-6xl select-none pointer-events-none z-0">
        ✦
      </div>

      <div className="absolute bottom-[90px] left-[400px] text-black/45 text-3xl select-none pointer-events-none z-0">
        ✦
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: yText }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* BADGE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#e6e1d8] text-xs font-semibold tracking-wide text-slate-700 mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Hire & Projects</span>
          </motion.div>

          {/* HELLO */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="mb-2"
          >
            <span className="text-2xl sm:text-3xl text-slate-600">
              Hello👋, I'M
            </span>
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-black tracking-tight leading-tight text-slate-950 text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] max-w-3xl"
          >
            MOH. CHANDRA WARDANA
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-medium"
          >
            Full Stack Developer focused on solving real-world challenges
            through scalable digital solutions, modern technologies, and
            impactful user experiences.
          </motion.p>

          {/* TECH STACK */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-wrap gap-2.5 mt-8 max-w-xl"
          >
            {["React.js", "Next.js", "Node.js", "PostgreSQL", "Docker"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-white/80 border border-[#e6e1d8] text-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
          >
            <button
              onClick={onScrollToProjects}
              className="group px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-black/10 transition-all flex items-center justify-center space-x-2"
            >
              <FolderGit2 className="h-4 w-4" />
              <span>View Projects</span>
            </button>

            <button
              onClick={onScrollToContact}
              className="px-8 py-3.5 rounded-full bg-white/80 border border-[#e6e1d8] text-slate-950 hover:bg-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{ y: yImage }}
          className="lg:col-span-5 flex justify-center items-center relative order-first lg:order-last"
        >
          {/* GLOW */}
          <div className="absolute w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-black/5 rounded-full blur-3xl z-0" />

          {/* IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] overflow-visible flex items-center justify-center z-10"
            style={{
              transform: `translate(${Math.max(
                Math.min(imageParallaxX, 10),
                -10,
              )}px, ${Math.max(Math.min(imageParallaxY, 10), -10)}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* IMAGE */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#f7f4ee] to-[#ede8df] shadow-2xl border border-white/80">
              <img
                src={developerPortrait}
                alt="Moh. Chandra Wardana"
                className="w-full h-full object-cover scale-105 pointer-events-none select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* FLOATING CARD 1 */}
            <div
              className="
                absolute
                -top-3 sm:-top-6 lg:-top-8
                right-0 sm:-right-3 lg:-right-6
                flex
                items-center
                space-x-3
                scale-[0.72] sm:scale-90 lg:scale-100
                origin-top-right
                bg-white/80
                backdrop-blur-xl
                px-3 py-2
                rounded-2xl
                shadow-xl
                border border-[#e6e1d8]
                z-20
                max-w-[185px]
              "
              style={{
                transform: `translate(${Math.max(
                  Math.min(element1X * 0.35, 12),
                  -12,
                )}px, ${Math.max(Math.min(element1Y * 0.18, 6), -6)}px)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              <div className="p-2 bg-emerald-500/10 rounded-xl shrink-0">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>

              <div className="flex flex-col justify-center leading-none">
                <p className="text-[9px] sm:text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-1">
                  Available
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-800 whitespace-nowrap leading-none">
                  Full-Stack Freelancer
                </p>
              </div>
            </div>

            {/* FLOATING CARD 2 */}
            <div
              className="absolute bottom-2 sm:-bottom-4 lg:-bottom-6 left-0 sm:-left-4 lg:-left-6 block scale-75 sm:scale-90 lg:scale-100 origin-bottom-left bg-white/80 backdrop-blur-xl px-3 py-2 rounded-2xl shadow-xl border border-[#e6e1d8] z-20 max-w-[190px]"
              style={{
                transform: `translate(${Math.max(
                  Math.min(element2X * 0.35, 12),
                  -12,
                )}px, ${Math.max(Math.min(element2Y * 0.2, 8), -8)}px)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              <div className="flex items-center space-x-1 mb-1">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 ml-1">
                  server.ts
                </span>
              </div>

              <p className="text-[8px] sm:text-[10px] font-mono text-slate-700 font-semibold leading-tight break-all">
                app.use('/api', chandraRouter)
              </p>
            </div>

            {/* CPU ICON */}
            <div
              className="absolute top-1/2 -left-2 sm:-left-4 lg:-left-6 block scale-75 sm:scale-90 lg:scale-100 bg-white/80 backdrop-blur-xl p-2.5 rounded-xl shadow-lg border border-[#e6e1d8] z-20"
              style={{
                transform: `translate(${Math.max(
                  Math.min(element3X * 0.3, 8),
                  -8,
                )}px, ${Math.max(Math.min(element3Y * 0.3, 8), -8)}px)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              <Cpu className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-700" />
            </div>

            {/* PHONE ICON */}
            <div
              className="absolute bottom-1/3 -right-2 sm:-right-4 lg:-right-6 block scale-75 sm:scale-90 lg:scale-100 bg-white/80 backdrop-blur-xl p-2.5 rounded-xl shadow-lg border border-[#e6e1d8] z-20"
              style={{
                transform: `translate(${Math.max(
                  Math.min(element1X * 0.3, 8),
                  -8,
                )}px, ${Math.max(Math.min(element1Y * 0.3, 8), -8)}px)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-700" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center pointer-events-none z-10">
        <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase mb-2">
          Keep scrolling
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="p-1 h-8 w-5 rounded-full border border-slate-300 flex justify-center"
        >
          <div className="h-1.5 w-1 bg-slate-700 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
