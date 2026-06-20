import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

import cert1 from "../assets/images/certif1.jpg";
import cert2 from "../assets/images/certif2.jpg";
import cert3 from "../assets/images/certif3.jpg";
import cert4 from "../assets/images/certif4.jpg";
import cert5 from "../assets/images/certif5.jpg";

type Certificate = {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  image?: string;
};

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Google AI",
    issuer: "Coursera",
    date: "2026",
    image: cert2,
  },
  {
    id: "2",
    title: "Google Business Intelligence",
    issuer: "Coursera",
    date: "2026",
    image: cert1,
  },
  {
    id: "3",
    title: "Competency in Software Engineering",
    issuer: "SMK Islam Al Amanah Salem & Universitas Amikom Purwokerto",
    date: "2025",
    image: cert4,
  },
  {
    id: "4",
    title: "Google Agile Essentials",
    issuer: "Coursera",
    date: "2026",
    image: cert3,
  },
  {
    id: "5",
    title: "Certificate of Internship",
    issuer: "PT Wiratek Solusi Asia",
    date: "2024",
    image: cert5,
  },
];

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

export default function CertificateGalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = certificates.length;

  const goPrev = () => setActiveIndex((prev) => wrapIndex(prev - 1, total));
  const goNext = () => setActiveIndex((prev) => wrapIndex(prev + 1, total));

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const visibleCards = useMemo(() => {
    const prev = certificates[wrapIndex(activeIndex - 1, total)];
    const current = certificates[activeIndex];
    const next = certificates[wrapIndex(activeIndex + 1, total)];
    return [prev, current, next];
  }, [activeIndex, total]);

  
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F7F3] px-4 py-10 sm:px-6 lg:px-8">
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

      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(248,247,243,0.35)_100%)]" />
      <div className="absolute top-[96px] left-0 right-0 h-px bg-[#d9d4cc] z-0 opacity-80" />

      <div className="absolute top-[132px] left-[60px] text-black/85 text-3xl select-none pointer-events-none z-0">
        ✦
      </div>
      <div className="absolute top-[320px] right-[110px] text-black/55 text-5xl select-none pointer-events-none z-0">
        ✦
      </div>
      <div className="absolute bottom-[120px] left-[120px] text-black/45 text-4xl select-none pointer-events-none z-0">
        ✦
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col justify-center">
        <div className="mb-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            CERTIFICATES
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Certificate Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-12">
            <div className="rounded-[2rem] border border-[#e6e1d8]/70 bg-transparent p-3 shadow-[0_20px_60px_rgba(15,23,42,0.03)] backdrop-blur-0 sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-400">
                  click / swipe / keyboard
                </p>
                <p className="text-[10px] font-mono tracking-[0.24em] text-slate-400">
                  {activeIndex + 1}/{total}
                </p>
              </div>

              <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[1.8rem] py-4 sm:min-h-[560px]">
                <AnimatePresence mode="popLayout">
                  {visibleCards.map((cert, idx) => {
                    const isCenter = idx === 1;
                    const isLeft = idx === 0;
                    const isRight = idx === 2;

                    const x = isLeft ? -210 : isCenter ? 0 : 210;
                    const scale = isCenter ? 1 : 0.9;
                    const rotate = isLeft ? -8 : isRight ? 8 : 0;
                    const opacity = isCenter ? 1 : 0.76;
                    const zIndex = isCenter ? 30 : 20;

                    return (
                      <motion.button
                        key={`${cert.id}-${activeIndex}`}
                        type="button"
                        onClick={() => {
                          if (isLeft) goPrev();
                          if (isRight) goNext();
                        }}
                        initial={{
                          opacity: 0,
                          x: x * 0.7,
                          scale: 0.76,
                          rotate,
                        }}
                        animate={{ opacity, x, scale, rotate }}
                        exit={{ opacity: 0, scale: 0.76, x: x * 1.05, rotate }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 26,
                        }}
                        className="absolute"
                        style={{ zIndex }}
                      >
                        <div
                          className={`relative overflow-hidden rounded-[1.9rem] border border-[#e6e1d8] bg-white/90 shadow-[0_22px_60px_rgba(15,23,42,0.10)] ${
                            isCenter
                              ? "h-[456px] w-[328px] sm:h-[520px] sm:w-[376px]"
                              : "h-[344px] w-[240px] sm:h-[400px] sm:w-[276px]"
                          }`}
                        >
                          <div className="absolute inset-0 opacity-60">
                            <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-white/45 blur-2xl" />
                            <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-black/5 blur-3xl" />
                          </div>

                          <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
                            <div className="flex items-center justify-between">
                              <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/75 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur-sm">
                                <Award className="h-3.5 w-3.5" />
                                CERTIFICATE
                              </div>
                              <div className="rounded-full border border-[#e6e1d8] bg-white/70 px-3 py-1 text-[10px] font-mono tracking-[0.2em] text-slate-500 backdrop-blur-sm">
                                {cert.date ?? "—"}
                              </div>
                            </div>

                            <div className="mt-4 flex flex-[1.15] items-center justify-center rounded-[1.5rem] border border-dashed border-[#d9d4cc] bg-white/55 p-2 shadow-inner">
                              {cert.image ? (
                                <img
                                  src={cert.image}
                                  alt={cert.title}
                                  className="h-full w-full rounded-[1.1rem] object-contain bg-white"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center rounded-[1.1rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0.6)_35%,rgba(248,247,243,0.95)_100%)] p-3 text-center">
                                  <div>
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e6e1d8] bg-white shadow-sm">
                                      <Award className="h-7 w-7 text-slate-700" />
                                    </div>
                                    <p className="mt-4 text-sm font-semibold text-slate-900">
                                      {cert.title}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                      {cert.issuer ?? "Certificate"}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="mt-3 rounded-[1.1rem] border border-[#e6e1d8] bg-white/80 px-3 py-2.5 text-center shadow-sm">
                              <p className="text-[13px] font-bold leading-tight text-slate-950">
                                {cert.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>

              <div className="mt-3 flex items-center justify-center gap-3">
                <button
                  onClick={goPrev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e1d8] bg-white/80 text-slate-900 shadow-sm transition-transform active:scale-95"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="rounded-full border border-[#e6e1d8] bg-white/75 px-3 py-1.5 text-[10px] font-mono tracking-[0.22em] text-slate-500 shadow-sm">
                  {activeIndex + 1} / {total}
                </div>

                <button
                  onClick={goNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e1d8] bg-white/80 text-slate-900 shadow-sm transition-transform active:scale-95"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {certificates.map((cert, index) => (
                  <button
                    key={cert.id}
                    onClick={() => setActiveIndex(index)}
                    className="p-1"
                    aria-label={`Go to certificate ${index + 1}`}
                  >
                    <motion.span
                      animate={{
                        width: activeIndex === index ? 26 : 8,
                        opacity: activeIndex === index ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.22 }}
                      className={`block h-2 rounded-full ${
                        activeIndex === index ? "bg-slate-900" : "bg-slate-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
