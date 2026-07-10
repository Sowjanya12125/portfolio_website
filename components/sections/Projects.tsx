'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
    description: 'Intelligent voice-controlled AI assistant with natural language understanding, task automation, and multi-service integration.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Sowjanya12125/jarvis',
    featured: true,
  },
  {
    id: 'expenseflow',
    title: 'ExpenseFlow',
    description: 'Full-stack expense management application with real-time analytics, intelligent categorization, and budget planning.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Sowjanya12125/expenseflow',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Prediction',
    description: 'ML-powered credit risk assessment system with high accuracy, feature importance analysis, and model explainability.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Sowjanya12125/credit-risk',
    featured: true,
  },
  {
    id: 'bayesian-ml',
    title: 'Bayesian Uncertainty Quantification',
    description: 'Advanced research implementing Bayesian methods for uncertainty quantification in deep neural networks.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'PyTorch', 'NumPy', 'Matplotlib'],
    category: 'Research',
    githubUrl: 'https://github.com/Sowjanya12125/bayesian-ml',
    featured: true,
  },
  {
    id: 'autonomous-agent',
    title: 'Autonomous AI Agent',
    description: 'Self-improving AI agent capable of learning, planning, and executing complex multi-step tasks autonomously.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Sowjanya12125/autonomous-agent',
    featured: false,
  },
  {
    id: 'security-scanner',
    title: 'Network Security Scanner',
    description: 'Automated vulnerability detection and reporting system with CVE database integration and custom scan profiles.',
    image: 'https://images.pexels.com/photos/60504/security-hacker-computer-network-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Nmap', 'Docker', 'React'],
    category: 'Cybersecurity',
    githubUrl: 'https://github.com/Sowjanya12125/security-scanner',
    featured: false,
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    mouseX.set(relX);
    mouseY.set(relY);
  };

  return (
    <motion.div
      variants={fadeUp}
      ref={rowRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative border-b border-ink-700"
      data-cursor="pointer"
    >
      {/* Hover preview image */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute z-20 hidden h-[280px] w-[400px] overflow-hidden rounded-lg md:block"
          style={{
            x,
            y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        </motion.div>
      )}

      <a
        href={project.githubUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block py-10 md:py-14"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 md:px-12">
          {/* Left: index + title */}
          <div className="flex items-baseline gap-6 md:gap-12">
            <span className="text-sm font-medium text-cream-600 tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-display text-2xl text-cream-200 transition-colors duration-300 group-hover:text-accent md:text-4xl lg:text-5xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-cream-500 md:text-base">
                {project.description}
              </p>
              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink-600 px-3 py-1 text-xs text-cream-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: category + arrow */}
          <div className="flex flex-shrink-0 flex-col items-end gap-3">
            <span className="text-eyebrow">{project.category}</span>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-600 text-cream-400 transition-colors group-hover:border-accent group-hover:text-accent"
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          </div>
        </div>

        {/* Hover background overlay */}
        <motion.div
          className="absolute inset-0 bg-ink-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </a>
    </motion.div>
  );
}

export default function Projects() {
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
          A selection of work spanning AI, full-stack engineering, and
          security research.
        </motion.p>
      </motion.div>

      {/* Project rows */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {/* Footer link */}
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
