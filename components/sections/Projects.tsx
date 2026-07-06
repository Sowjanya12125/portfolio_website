'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Code2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'jarvis',
    title: 'Jarvis AI Assistant',
    description: 'Intelligent voice-controlled AI assistant with natural language understanding',
    longDescription: 'A comprehensive AI assistant inspired by Iron Man\'s Jarvis. Built with advanced NLP capabilities, voice recognition, and seamless integration with various services.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Speech Recognition', 'FastAPI'],
    features: [
      'Voice-controlled interface',
      'Natural language processing',
      'Task automation',
      'Multi-service integration',
    ],
    githubUrl: 'https://github.com/Sowjanya12125/jarvis',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'expenseflow',
    title: 'ExpenseFlow',
    description: 'Full-stack expense management application with real-time analytics',
    longDescription: 'A modern expense tracking application with intelligent categorization, budget planning, and comprehensive analytics dashboard.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Chart.js'],
    features: [
      'Real-time expense tracking',
      'Visual analytics dashboard',
      'Budget planning tools',
      'Export to CSV/PDF',
    ],
    githubUrl: 'https://github.com/Sowjanya12125/expenseflow',
    liveUrl: '#',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Prediction',
    description: 'ML-powered credit risk assessment system with high accuracy',
    longDescription: 'Machine learning system for predicting credit default risk using advanced algorithms and feature engineering techniques.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Streamlit'],
    features: [
      'Risk score prediction',
      'Feature importance analysis',
      'Model explainability',
      'REST API integration',
    ],
    githubUrl: 'https://github.com/Sowjanya12125/credit-risk',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'bayesian-ml',
    title: 'Bayesian Uncertainty Quantification',
    description: 'Research on uncertainty estimation in deep learning models',
    longDescription: 'Advanced research project implementing Bayesian methods for uncertainty quantification in neural networks.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'PyTorch', 'NumPy', 'Jupyter', 'Matplotlib'],
    features: [
      'Bayesian neural networks',
      'Uncertainty estimation',
      'Model calibration',
      'Research documentation',
    ],
    githubUrl: 'https://github.com/Sowjanya12125/bayesian-ml',
    category: 'Research',
    featured: true,
  },
  {
    id: 'autonomous-agent',
    title: 'Autonomous AI Agent',
    description: 'Self-improving AI agent for complex task automation',
    longDescription: 'An autonomous AI agent capable of learning, planning, and executing complex multi-step tasks with minimal human intervention.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    features: [
      'Autonomous task execution',
      'Memory and context awareness',
      'Self-improvement loops',
      'Tool integration',
    ],
    githubUrl: 'https://github.com/Sowjanya12125/autonomous-agent',
    category: 'AI/ML',
    featured: false,
  },
  {
    id: 'security-scanner',
    title: 'Network Security Scanner',
    description: 'Automated vulnerability detection and reporting system',
    longDescription: 'Comprehensive security scanning tool for identifying network vulnerabilities and generating detailed reports.',
    image: 'https://images.pexels.com/photos/60504/security-hacker-computer-network-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Nmap', 'Docker', 'FastAPI', 'React'],
    features: [
      'Vulnerability scanning',
      'Automated reporting',
      'CVE database integration',
      'Custom scan profiles',
    ],
    githubUrl: 'https://github.com/Sowjanya12125/security-scanner',
    category: 'Cybersecurity',
    featured: false,
  },
];

const categories = ['All', 'AI/ML', 'Full Stack', 'Research', 'Cybersecurity'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="relative py-24 bg-base-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-emerald-500/3 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-teal-500/3 blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400">
            Projects
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            A showcase of projects that demonstrate technical expertise and problem-solving capabilities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1 }}
              layout
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full rounded-3xl bg-slate-800/50 border border-slate-700/50 overflow-hidden"
              >
                {/* Spotlight Effect */}
                {hoveredProject === project.id && (
                  <motion.div
                    layoutId="projectSpotlight"
                    className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 blur-xl opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-400 backdrop-blur-sm">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/50 to-transparent" />

                  {/* Overlay Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-base-950/60 backdrop-blur-sm"
                  >
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-slate-800/80 p-3 text-white hover:bg-teal-500/30"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-slate-800/80 p-3 text-white hover:bg-teal-500/30"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full bg-slate-800/80 p-3 text-white hover:bg-teal-500/30"
                    >
                      <Eye className="h-5 w-5" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="text-xs font-medium text-teal-400 mb-2 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-slate-700/50 px-2 py-0.5 text-xs text-slate-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-teal-500/10 px-2 py-1 text-xs font-medium text-teal-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-lg bg-slate-700/50 px-2 py-1 text-xs text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-teal-500/20 transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-emerald-500/0 blur-xl transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Sowjanya12125"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Code2 className="h-4 w-4" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
