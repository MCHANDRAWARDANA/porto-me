import { Project, Skill, Experience, Stat } from "../types";

export const personalInfo = {
  name: "Excellent Chandra",
  title: "Full Stack Developer",
  subtitle:
    "Crafting scalable digital experiences and modern web applications.",
  bio: "I am a highly motivated Full Stack Developer who thrives on building modern, performant, and visual web and mobile solutions. With a keen eye for aesthetics, startup-minded agility, and high scalability, I turn complex technical challenges into elegant, intuitive products.",
  status: "Available for freelance & full-time roles",
  email: "mhmmdchandra999@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com/excellent_chandra", // or a realistic portfolio handle
};

export const statsData: Stat[] = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Optimized Speed", value: 99, suffix: "%" },
];

export const skillsData: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "Code2",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "Layers",
    color: "from-gray-700 to-black",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "Palette",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "FileCode",
    color: "from-blue-500 to-indigo-600",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "Server",
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "Cpu",
    color: "from-gray-500 to-gray-800",
  },
  {
    name: "MySQL",
    category: "backend",
    icon: "Database",
    color: "from-blue-600 to-orange-500",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: "DatabaseZap",
    color: "from-blue-500 to-indigo-800",
  },

  // Mobile
  {
    name: "Flutter",
    category: "mobile",
    icon: "Tablet",
    color: "from-cyan-500 to-blue-600",
  },

  // Tools
  {
    name: "Docker",
    category: "tools",
    icon: "Box",
    color: "from-blue-400 to-blue-600",
  },
];

export const experiencesData: Experience[] = [
  {
    id: "exp1",
    role: "Lead Full Stack Freelancer",
    company: "Upwork & Direct Clients",
    period: "2024 - Present",
    description: [
      "Developed high-end SaaS applications, responsive company profiles, and custom admin dashboards for global startups and local clients.",
      "Designed and deployed optimized Node.js backends and PostgreSQL databases, reducing query latencies by up to 35%.",
      "Engineered React/Next.js single-page interfaces and state-driven web platforms matching strict designer spec sheets.",
    ],
    tags: ["React.js", "Next.js", "Express.js", "PostgreSQL", "Docker"],
  },
  {
    id: "exp2",
    role: "Full Stack Web Developer",
    company: "TechVibe Solutions",
    period: "2023 - 2024",
    description: [
      "Collaborated on building a fully responsive E-Commerce platform integrated with payment gateways, dynamic cart components, and multi-vendor setup.",
      "Maintained and optimized legacy frontend web codebases, implementing Framer Motion micro-interactions to increase mobile user session lengths by 22%.",
      "Configured automated deployment workflows and containerized applications with Docker to improve dev-to-prod consistency.",
    ],
    tags: ["Tailwind CSS", "TypeScript", "Node.js", "MySQL", "Docker"],
  },
  {
    id: "exp3",
    role: "Mobile & Web Project Developer",
    company: "Contract Developer",
    period: "2022 - 2023",
    description: [
      "Built hybrid mobile applications using Flutter and native Android features using Kotlin.",
      "Designed and implemented lightweight server endpoints and web interfaces supporting mobile sync operations.",
      "Gained deep experience in intuitive user interface design, fast-loading rendering, and offline-first state architectures.",
    ],
    tags: ["Kotlin", "Flutter", "React.js", "MySQL"],
  },
];

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "Nexus E-Commerce Platform",
    description:
      "A ultra-fast digital commerce solution with headless architecture, fluid product sliders, instant search filters, glassmorphic checkout widgets, and Stripe implementation.",
    category: "web",
    tags: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    stats: "2.4s Load Time • $45k Sales",
    accentColor: "blue",
  },
  {
    id: "proj2",
    title: "Aura AI Analytics Dashboard",
    description:
      "Real-time marketing statistics engine powered by AI prediction graphs, rich custom D3 charts, automated PDF reporting, and beautiful multi-pane bento workspace tabs.",
    category: "ai",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    stats: "Real-time Socket • 99.8% Uptime",
    accentColor: "indigo",
  },
  {
    id: "proj3",
    title: "Omni SaaS Subscription Landing",
    description:
      "A high-converting tech landing experience showcasing interactive pricing grids, beautiful sticky horizontal scrolling sections, and a custom magnetic button UI canvas.",
    category: "saas",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    stats: "99 SEO Score • 15% Convert",
    accentColor: "cyan",
  },
  {
    id: "proj4",
    title: "Verve Mobile App Showcase",
    description:
      "A hybrid mobile mockup workspace with custom physics drag cards, interactive push notifications demo, and smooth transition maps for delivery tracking.",
    category: "mobile",
    tags: ["Flutter", "Kotlin", "Express.js", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    stats: "Android & iOS • 5k+ DLs",
    accentColor: "purple",
  },
  {
    id: "proj5",
    title: "Aero Company Profile Platform",
    description:
      "An premium editorial platform for a forward-thinking VC firm with particle-reveal background canvas, dynamic content filtering, and elegant grid bento elements.",
    category: "web",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    stats: "SEO Optimized • Pure Fluid CSS",
    accentColor: "emerald",
  },
  {
    id: "proj6",
    title: "Chronos Pro Admin Dashboard",
    description:
      "A pristine full-featured system console with dark/light dynamic panels, user configuration fields, granular workspace permission logs, and automated cron reports.",
    category: "saas",
    tags: ["React.js", "Express.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    stats: "12 Admin Tools • Encrypted Postgres",
    accentColor: "rose",
  },
];
