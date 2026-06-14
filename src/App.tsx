import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

// Core Subcomponents
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize Theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("excellentTheme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newVal = !prev;

      if (newVal) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("excellentTheme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("excellentTheme", "light");
      }

      return newVal;
    });
  };

  // Smooth Scroll Helper
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`relative w-full min-h-screen overflow-x-hidden font-sans transition-colors duration-300 selection:bg-blue-500/20 selection:text-blue-600 ${
        darkMode ? "dark bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* ===================== */}
      {/* BACKGROUND BLOBS */}
      {/* ===================== */}

      {/* Top Right Blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0">
          <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[520px] lg:h-[520px] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[70px] sm:blur-[90px] lg:blur-[110px] translate-x-1/3 -translate-y-1/3" />
        </div>

        {/* Bottom Left Blob */}
        <div className="absolute bottom-1/4 left-0">
          <div className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[420px] lg:h-[420px] rounded-full bg-sky-100/30 dark:bg-cyan-950/10 blur-[60px] sm:blur-[80px] lg:blur-[95px] -translate-x-1/3" />
        </div>
      </div>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main className="relative z-10 w-full overflow-x-hidden">
        {/* Ambient Top Gradient */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-100/20 dark:from-sky-950/10 to-transparent z-0" />

        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <Hero
            onScrollToProjects={() => handleScrollToSection("projects")}
            onScrollToContact={() => handleScrollToSection("contact")}
          />
        </section>

        {/* About */}
        <section id="about" className="relative overflow-hidden">
          <About />
        </section>

        {/* Skills */}
        <section id="skills" className="relative overflow-hidden">
          <Skills />
        </section>

        {/* Experience */}
        <section id="experience" className="relative overflow-hidden">
          <Experience />
        </section>

        {/* Projects */}
        <section id="projects" className="relative overflow-hidden">
          <Projects />
        </section>

        {/* Certificate */}
        <section id="certificate" className="relative overflow-hidden">
          <Certificate />
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
