import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers } from "lucide-react";

import ecommerceImg from "../assets/images/ecommerce.png";
import ticketImg from "../assets/images/tiket.png";
import todoImg from "../assets/images/todolist.png";
import companyImg from "../assets/images/company.png";
import blogImg from "../assets/images/blog.png";
import buyImg from "../assets/images/buy.png";

type ProjectCategory = "web" | "mobile" | "saas" | "ai";

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  span: string;
  categories: ProjectCategory[];
};

const projectItems: ProjectItem[] = [
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Fullstack e-commerce dengan ReactJS, TailwindCSS, NodeJS, dan ExpressJS untuk pengalaman belanja yang cepat dan modern.",
    image: ecommerceImg,
    span: "lg:col-span-8",
    categories: ["web", "saas"],
  },
  {
    id: "ticket",
    title: "Pemesanan Tiket",
    description:
      "Website pemesanan tiket fullstack yang dirancang responsif, rapi, dan mudah digunakan dari desktop maupun mobile.",
    image: ticketImg,
    span: "lg:col-span-4",
    categories: ["web", "mobile"],
  },
  {
    id: "todo",
    title: "To-do List",
    description:
      "Aplikasi to-do list dengan alur kerja sederhana, clean UI, dan struktur fullstack yang ringan serta mudah dikembangkan.",
    image: todoImg,
    span: "lg:col-span-4",
    categories: ["web", "mobile"],
  },
  {
    id: "company",
    title: "Web Company Profile",
    description:
      "Website company profile profesional untuk menampilkan identitas brand, layanan, dan informasi perusahaan secara elegan.",
    image: companyImg,
    span: "lg:col-span-8",
    categories: ["web", "saas"],
  },
  {
    id: "blog",
    title: "Blog Informasi",
    description:
      "Platform blog informasi fullstack untuk membaca dan mengelola konten dengan tampilan bersih dan navigasi yang nyaman.",
    image: blogImg,
    span: "lg:col-span-8",
    categories: ["web", "saas"],
  },
  {
    id: "buy",
    title: "Marketplace",
    description:
      "Platform marketplace dengan UI modern untuk membeli produk digital dan fisik secara cepat.",
    image: buyImg,
    span: "lg:col-span-4",
    categories: ["web", "saas"],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>(
    "all",
  );

  const categories = [
    { label: "All Projects", id: "all" as const },
    { label: "Web Apps", id: "web" as const },
    { label: "AI Products", id: "ai" as const },
    { label: "Mobile Specs", id: "mobile" as const },
    { label: "SaaS Systems", id: "saas" as const },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectItems;
    return projectItems.filter((proj) =>
      proj.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
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

      {/* DECORATIVE STARS - Reduced */}
      <div className="pointer-events-none absolute top-[150px] left-[90px] z-[1] text-black/80 text-4xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute top-[190px] right-[180px] z-[1] text-black/70 text-3xl select-none">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[180px] right-[120px] z-[1] text-black/65 text-4xl select-none">
        ✦
      </div>

      {/* SOFT GLOWS - Simplified */}
      <div className="pointer-events-none absolute top-20 left-[-120px] z-0 h-[320px] w-[320px] rounded-full bg-black/5 blur-[140px] opacity-20" />
      <div className="pointer-events-none absolute bottom-0 right-[-120px] z-0 h-[320px] w-[320px] rounded-full bg-black/5 blur-[140px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl text-left">
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full border border-[#e6e1d8] bg-white/70 px-3 py-1 backdrop-blur-sm">
              <Layers className="h-3.5 w-3.5 text-slate-700" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
                My Masterpieces
              </span>
            </div>

            <h2 className="font-display text-2xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-5xl">
              Featured Projects
              <span className="block text-slate-500">Bento Projects Grid</span>
            </h2>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-1.5 rounded-2xl border border-[#e6e1d8] bg-white/70 p-1.5 backdrop-blur-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all focus:outline-none ${
                    isActive
                      ? "border border-slate-200 bg-white text-slate-950 shadow-md"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.article
                layout
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/75 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] ${proj.span}`}
              >
                <div className="relative w-full overflow-hidden border-b border-slate-100">
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-8">
                  <div className="mb-3 flex items-center gap-2">
                    {proj.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-[#e6e1d8] bg-white/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-xl font-black text-slate-950 transition-colors group-hover:text-slate-700 md:text-2xl">
                    {proj.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                    {proj.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
