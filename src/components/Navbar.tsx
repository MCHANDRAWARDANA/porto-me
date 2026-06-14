import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certificate", id: "certificate" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 150;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // ✅ Tutup menu dulu
    setMobileMenuOpen(false);

    // ✅ Delay agar animasi menu tidak konflik dengan scroll
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const header = document.getElementById("app-header");
        const headerHeight = header ? header.offsetHeight : 80;
        const offset = headerHeight + 20;

        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: "smooth",
        });

        setActiveItem(id);
      }
    }, 150);
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-white/75 backdrop-blur-xl border-b border-[#e6e1d8]/80 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => scrollToSection("home")}
            className="group flex cursor-pointer items-center space-x-2 text-left focus:outline-none"
          >
            <span className="text-xl font-extrabold tracking-tight text-slate-950 md:text-2xl">
              MChandraW
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 rounded-full border border-[#e6e1d8] bg-white/70 p-1.5 backdrop-blur-sm lg:flex">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "text-slate-950 font-semibold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full border border-[#e6e1d8] bg-white shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative overflow-hidden rounded-full border border-slate-900 bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all focus:outline-none"
            >
              <div className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 flex items-center space-x-1 font-semibold transition-colors group-hover:text-slate-950">
                <span>Hire Me</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full border border-[#e6e1d8] p-2 text-slate-700"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // ✅ z-50 agar tidak tertutup elemen lain, top pakai CSS var dari header
            className="fixed top-[73px] left-0 z-50 w-full overflow-hidden border-b border-[#e6e1d8] bg-white/95 px-6 py-6 shadow-xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  // ✅ Hapus stopPropagation, cukup panggil scrollToSection
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full border-b border-[#eee9df] py-2.5 text-left text-base font-semibold transition-colors ${
                    activeItem === item.id
                      ? "text-slate-950"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white shadow-md active:scale-95 transition-transform"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
