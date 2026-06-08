import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { BookOpen, Code2, Sparkles } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [stepText, setStepText] = useState("Preparing the book...");

  const progress = useMotionValue(0);

  const coverRotateY = useTransform(
    progress,
    [0, 10, 28, 100],
    [0, 0, -168, -168],
  );
  const coverX = useTransform(progress, [0, 28, 100], [0, 0, -52]);
  const coverTiltZ = useTransform(progress, [0, 28, 100], [0, -2, -4]);
  const pageSpread = useTransform(progress, [0, 20, 45, 100], [0, 2, 18, 28]);
  const pageOpen = useTransform(progress, [0, 20, 55, 100], [0, 0, 14, 22]);
  const bookScale = useTransform(progress, [0, 15, 100], [0.92, 1, 1.03]);
  const bookLift = useTransform(progress, [0, 100], [10, -6]);

  useEffect(() => {
    progress.set(percent);
  }, [percent, progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const climb = Math.floor(Math.random() * 7) + 4;
        return Math.min(prev + climb, 100);
      });
    }, 85);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent < 12) {
      setStepText("Closing the cover...");
    } else if (percent < 28) {
      setStepText("Lifting the front cover...");
    } else if (percent < 50) {
      setStepText("Turning the first pages...");
    } else if (percent < 78) {
      setStepText("Writing the story...");
    } else if (percent < 100) {
      setStepText("Finishing the final chapter...");
    } else {
      setStepText("Book ready.");
    }

    if (percent === 100) {
      const timeout = setTimeout(() => onComplete(), 750);
      return () => clearTimeout(timeout);
    }
  }, [percent, onComplete]);

  const dust = useMemo(
    () => [
      { left: "12%", top: "20%", delay: 0 },
      { left: "20%", top: "74%", delay: 0.8 },
      { left: "78%", top: "24%", delay: 1.2 },
      { left: "86%", top: "68%", delay: 1.6 },
      { left: "50%", top: "12%", delay: 0.4 },
    ],
    [],
  );

  return (
    <AnimatePresence>
      <motion.div
        id="app-loader"
        className="fixed inset-0 z-50 overflow-hidden bg-[#07111f] text-white"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.04,
          filter: "blur(10px)",
          transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 },
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_68%,transparent_100%)]" />

        {dust.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/70 blur-[1px]"
            style={{ left: dot.left, top: dot.top }}
            animate={{
              y: [0, -14, 0],
              opacity: [0.3, 0.85, 0.3],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.55, 0.28] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
          <div className="w-full max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
            >
              <BookOpen className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-medium tracking-[0.28em] text-slate-200/80 uppercase">
                Opening Portfolio Book
              </span>
            </motion.div>

            <div className="relative mx-auto mb-10 flex h-[360px] w-full max-w-[560px] items-center justify-center [perspective:2400px]">
              <motion.div
                className="absolute bottom-8 h-10 w-[360px] rounded-full bg-black/40 blur-2xl"
                animate={{ scaleX: [1, 1.08, 1], opacity: [0.24, 0.42, 0.24] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                style={{ scale: bookScale, y: bookLift }}
                className="relative h-[255px] w-[430px] max-w-full"
              >
                {/* back cover */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-[50%] rounded-l-[28px] border border-white/10 bg-[linear-gradient(145deg,#0f172a,#111d33_55%,#0a1020)] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
                  animate={{
                    y: [0, -1, 0],
                    rotateZ: [0, -0.4, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_36%)]" />
                </motion.div>

                {/* pages */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[226px] w-[196px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] bg-gradient-to-b from-slate-50 to-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.35)]"
                  style={{ x: pageOpen }}
                >
                  <div className="absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_45%)] opacity-80" />
                  <motion.div
                    className="absolute inset-0 opacity-55"
                    animate={{ x: [-8, 8, -8] }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, rgba(15,23,42,0.10) 0px, rgba(15,23,42,0.10) 1px, transparent 1px, transparent 16px)",
                    }}
                  />

                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-4 rounded-[14px] border border-slate-300/50 bg-white/55"
                      animate={{
                        rotateZ: [0, i % 2 === 0 ? 1.5 : -1.5, 0],
                        x: [0, i * 1.3, 0],
                        y: [0, i * -0.8, 0],
                      }}
                      transition={{
                        duration: 2.8 + i * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.12,
                      }}
                      style={{
                        clipPath:
                          i === 0
                            ? "inset(0 70% 0 0)"
                            : i === 1
                              ? "inset(0 46% 0 22%)"
                              : i === 2
                                ? "inset(0 22% 0 46%)"
                                : "inset(0 0 0 70%)",
                        opacity: 0.95,
                      }}
                    >
                      <div className="absolute left-4 right-4 top-6 space-y-2">
                        <div className="h-2 w-3/4 rounded-full bg-slate-300/70" />
                        <div className="h-2 w-1/2 rounded-full bg-slate-300/60" />
                        <div className="h-2 w-5/6 rounded-full bg-slate-300/50" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* spine */}
                <motion.div
                  className="absolute left-1/2 top-0 z-20 h-full w-[12px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-300 via-slate-100 to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.55)]"
                  animate={{ scaleY: [1, 1.03, 1], opacity: [0.75, 1, 0.75] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* front cover */}
                <motion.div
                  style={{
                    rotateY: coverRotateY,
                    x: coverX,
                    rotateZ: coverTiltZ,
                    zIndex: 30,
                  }}
                  className="absolute left-1/2 top-0 h-full w-[215px] origin-left rounded-r-[28px] rounded-l-[12px] border border-white/10 bg-[linear-gradient(135deg,#0b1220,#14213d_48%,#0f172a)] shadow-[0_30px_90px_rgba(0,0,0,0.5)] [backface-visibility:hidden]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_34%)]" />
                  <div className="absolute inset-y-0 left-0 w-px bg-white/10" />

                  <motion.div
                    className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
                    animate={{
                      scale: [0.98, 1.02, 0.98],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md">
                      <Code2 className="h-8 w-8 text-cyan-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-semibold tracking-[0.35em] text-cyan-200/80 uppercase">
                        MChandraW
                      </p>
                      <p className="text-xs text-slate-300/70">Vol. II</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute right-5 top-5"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-yellow-300" />
                  </motion.div>

                  {/* realistic hinge highlight */}
                  <div className="absolute inset-y-0 left-0 w-[14px] bg-[linear-gradient(to_right,rgba(255,255,255,0.22),transparent)] opacity-70" />
                </motion.div>

                {/* page curl / open spread */}
                <motion.div
                  className="absolute left-1/2 top-[50%] z-40 h-[224px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/65 blur-[1px]"
                  style={{
                    x: pageSpread,
                    opacity: pageSpread,
                  }}
                />

                {/* page highlight */}
                <motion.div
                  className="absolute left-1/2 top-[50%] z-40 h-[220px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/60 blur-[1px]"
                  style={{ x: pageSpread }}
                />
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-3xl font-semibold tracking-[0.16em] text-transparent uppercase md:text-4xl"
            >
              Chandra Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-xs tracking-[0.35em] text-cyan-300/85 uppercase"
            >
              A story of code, design, and growth
            </motion.p>

            <div className="mx-auto mt-10 w-full max-w-md">
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{stepText}</span>
                <span className="font-semibold text-cyan-300">{percent}%</span>
              </div>

              <div className="relative h-2 overflow-hidden rounded-full bg-white/8 ring-1 ring-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 shadow-[0_0_22px_rgba(34,211,238,0.55)]"
                  style={{ width: `${percent}%` }}
                />
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)]"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{
                    duration: 1.25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-[10px] tracking-[0.4em] text-slate-500 uppercase"
            >
              Opening chapters for your journey
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
