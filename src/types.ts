export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'saas' | 'ai';
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  stats?: string;
  accentColor: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  icon: string; // Name of Lucide icon or special handling
  color: string; // Tailwind accent class
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
