'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  contributions: string[];
  technologies: string[];
  type: string;
  image: string;
  placeholder?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Research & Development',
    role: 'Machine Learning Researcher',
    duration: '2024 — Present',
    location: 'Remote',
    type: 'Research',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Developed Bayesian Uncertainty Quantification models for ML systems',
      'Implemented probabilistic inference algorithms for risk prediction',
      'Contributing to open-source ML projects',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    company: 'ISRO — Bharatiya Antariksh Hackathon',
    role: 'Team Lead & Developer',
    duration: 'Jul 2025',
    location: 'India (National)',
    type: 'Hackathon',
    image: 'https://images.pexels.com/photos/73851/space-moon-earth-planet-73851.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Advanced to Round 2 among hundreds of nationwide teams',
      'Built high-complexity data processing algorithms for large-scale satellite and aerospace datasets',
      'Presented solutions directly to ISRO evaluators',
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Cloud Services'],
    placeholder: true,
  },
  {
    company: 'University Projects',
    role: 'Full Stack Developer & AI Engineer',
    duration: '2023 — Present',
    location: 'India',
    type: 'Projects',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Built Jarvis AI Assistant with natural language understanding',
      'Developed Credit Risk Prediction system using ML',
      'Created ExpenseFlow — a full-stack expense management application',
    ],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-ink-900">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-eyebrow mb-6">
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display text-[clamp(2rem,5vw,3.5rem)] text-cream-100"
          >
            Professional journey<span className="text-accent">.</span>
          </motion.h2>
        </motion.div>

        {/* Experience list */}
        <div className="mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group grid grid-cols-1 gap-6 border-b border-ink-700 py-10 transition-colors hover:border-cream-600 md:grid-cols-12 md:gap-8"
            >
              {/* Left: image + meta */}
              <div className="md:col-span-3">
                <div className="relative mb-4 h-28 overflow-hidden rounded-lg border border-ink-700">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
                  {exp.placeholder && (
                    <div className="absolute bottom-2 left-2 rounded-full bg-ink-950/80 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-cream-500">
                      Placeholder
                    </div>
                  )}
                </div>
                <span className="text-sm text-cream-600">{exp.duration}</span>
                <div className="mt-1 inline-block rounded-full border border-ink-600 px-3 py-1 text-xs text-cream-500">
                  {exp.type}
                </div>
              </div>

              {/* Middle: role + company */}
              <div className="md:col-span-5">
                <h3 className="text-xl font-semibold text-cream-200 transition-colors group-hover:text-accent md:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-cream-500">{exp.company}</p>
                <p className="mt-1 text-xs text-cream-600">{exp.location}</p>
              </div>

              {/* Right: contributions */}
              <div className="md:col-span-4">
                <ul className="space-y-2">
                  {exp.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-cream-500"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-cream-600"
                    >
                      {tech}
                      {exp.technologies.indexOf(tech) < exp.technologies.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          <a
            href="https://www.linkedin.com/in/sowjanya-s-k-susarla-498632308"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cream-200 transition-colors hover:text-accent"
          >
            View full profile on LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
