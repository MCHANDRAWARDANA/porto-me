import { ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  // Ubah manual kalau ada update web porto berikutnya
  const lastUpdated = "08 June 2026";

  return (
    <footer
      id="app-footer"
      className="relative overflow-hidden border-t border-[#e6e1d8] bg-[#F8F7F3] transition-colors duration-300"
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

      {/* SOFT GLOWS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-black/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-7 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">

              <h2 className="text-lg font-black tracking-tight text-slate-950">
                MchandraW
              </h2>
            </div>

            <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-500">
              Full Stack Developer crafting modern digital experiences &
              scalable startup products.
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 rounded-full border border-[#e6e1d8] bg-white/70 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[11px] font-medium text-slate-600 sm:text-xs">
                Available for freelance & collaborations
              </span>
            </div>

            <p className="mt-3 text-center text-xs text-slate-500 md:text-sm">
              © {currentYear} MchandraW. All rights reserved.
            </p>

            <p className="mt-1 text-center text-xs font-semibold tracking-wide text-slate-500">
              Last Updated — {lastUpdated}
            </p>
          </div>

          {/* RIGHT */}
          <button
            onClick={scrollToTop}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-[#e6e1d8] bg-white/70 px-5 py-2.5 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
            aria-label="Back to top"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />

            <span className="relative z-10 text-sm font-semibold tracking-wide">
              Back to Top
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
