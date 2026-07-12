'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'jarvis',
    title: 'Jarvis AI Assistant',
    description:
      'Intelligent voice-controlled AI assistant with natural language understanding, task automation, and multi-service integration.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Sowjanya12125/jarvis',
    featured: true,
  },
  {
    id: 'expenseflow',
    title: 'ExpenseFlow',
    description:
      'Full-stack expense management application with real-time analytics, intelligent categorization, and budget planning.',
    image:
      'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Sowjanya12125/expenseflow',
    featured: true,
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Prediction',
    description:
      'ML-powered credit risk assessment system with high accuracy, feature importance analysis, and model explainability.',
    image:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Sowjanya12125/credit-risk',
    featured: true,
  },
  {
    id: 'bayesian-ml',
    title: 'Bayesian Uncertainty Quantification',
    description:
      'Advanced research implementing Bayesian methods for uncertainty quantification in deep neural networks.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'PyTorch', 'NumPy', 'Matplotlib'],
    category: 'Research',
    githubUrl: 'https://github.com/Sowjanya12125/bayesian-ml',
    featured: true,
  },
  {
    id: 'autonomous-agent',
    title: 'Autonomous AI Agent',
    description:
      'Self-improving AI agent capable of learning, planning, and executing complex multi-step tasks autonomously.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Sowjanya12125/autonomous-agent',
    featured: false,
  },
  {
    id: 'security-scanner',
    title: 'Network Security Scanner',
    description:
      'Automated vulnerability detection and reporting system with CVE database integration and custom scan profiles.',
    image:
      'https://images.pexels.com/photos/5380592/pexels-photo-5380592.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Nmap', 'Docker', 'React'],
    category: 'Cybersecurity',
    githubUrl: 'https://github.com/Sowjanya12125/security-scanner',
    featured: false,
  },
];

const categories = ['All', 'AI/ML', 'Full Stack', 'Research', 'Cybersecurity'];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const progressX = useSpring(0, { damping: 30, stiffness: 200 });
  const progressWidth = useTransform(progressX, (v) => `${v}%`);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    progressX.set((relX / rect.width) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    progressX.set(0);
  };

  return (
    <motion.div
      variants={fadeUp}
      ref={rowRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="group relative border-b border-ink-700"
      data-cursor="pointer"
    >
      {/* Hover progress bar at top of row */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-30 h-px bg-accent"
        style={{ width: progressWidth }}
      />

      {/* Hover background — behind content, never blocks clicks */}
      <div className="pointer-events-none absolute inset-0 bg-ink-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-10 md:px-12 md:py-14">
        {/* Left: index + title + links */}
        <div className="flex items-baseline gap-6 md:gap-12">
          <motion.span
            className="text-sm font-medium tabular-nums"
            animate={{
              color: isHovered ? '#e07a5f' : '#7a746a',
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>

          <div>
            <h3 className="text-display text-2xl text-cream-200 transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent md:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-cream-500 transition-opacity duration-300 group-hover:text-cream-400 md:text-base">
              {project.description}
            </p>
            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink-600 px-3 py-1 text-xs text-cream-500 transition-colors duration-300 group-hover:border-ink-500 group-hover:text-cream-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action links — always visible and clickable */}
            <div className="mt-5 flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 inline-flex items-center gap-1.5 text-xs font-medium text-cream-400 transition-colors hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 inline-flex items-center gap-1.5 text-xs font-medium text-cream-400 transition-colors hover:text-accent"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: thumbnail + category + arrow */}
        <div className="flex flex-shrink-0 flex-col items-end gap-3">
          <span className="text-eyebrow">{project.category}</span>
          {/* Thumbnail */}
          <div className="relative h-20 w-28 overflow-hidden rounded-lg border border-ink-600 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/50 md:h-24 md:w-36">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
            {project.featured && (
              <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-accent/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ink-950">
                Featured
              </div>
            )}
          </div>
          <motion.div
            animate={{
              rotate: isHovered ? 45 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-600 text-cream-400 transition-colors group-hover:border-accent group-hover:text-accent"
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative bg-ink-950">
      {/* Section header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="section-padding pb-12"
      >
        <motion.p variants={fadeUp} className="text-eyebrow mb-6">
          Selected Work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-display text-[clamp(2.5rem,7vw,5rem)] text-cream-100"
        >
          Projects<span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base text-cream-500 md:text-lg"
        >
          A selection of work spanning AI, full-stack engineering, and security
          research.
        </motion.p>

        {/* Category filters */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'border-accent text-accent'
                  : 'border-ink-600 text-cream-500 hover:border-cream-600 hover:text-cream-200'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.span
                  className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Project rows */}
      <div>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="section-padding pt-16 text-center"
      >
        <a
          href="https://github.com/Sowjanya12125"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-lg font-medium text-cream-200 hover:text-accent"
        >
          View all projects on GitHub
        </a>
      </motion.div>
    </section>
  );
}
