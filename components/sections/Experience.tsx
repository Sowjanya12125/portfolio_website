'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  contributions: string[];
  technologies: string[];
  type: 'work' | 'research' | 'internship';
}

const experiences: ExperienceItem[] = [
  {
    company: 'Research & Development',
    role: 'Machine Learning Researcher',
    duration: '2024 - Present',
    location: 'Remote',
    type: 'research',
    contributions: [
      'Developed Bayesian Uncertainty Quantification models for ML systems',
      'Implemented probabilistic inference algorithms for risk prediction',
      'Contributing to open-source ML projects',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    company: 'ISRO Hackathon',
    role: 'Team Lead & Developer',
    duration: '2024',
    location: 'India',
    type: 'work',
    contributions: [
      'Led a team of 4 members to develop innovative space-tech solutions',
      'Won the national-level hackathon organized by ISRO',
      'Built real-time data processing pipeline for satellite imagery',
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Cloud Services'],
  },
  {
    company: 'University Projects',
    role: 'Full Stack Developer & AI Engineer',
    duration: '2023 - Present',
    location: 'India',
    type: 'internship',
    contributions: [
      'Built Jarvis AI Assistant with natural language understanding',
      'Developed Credit Risk Prediction system using ML',
      'Created ExpenseFlow - a full-stack expense management application',
    ],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
  },
];

const typeColors = {
  work: 'from-teal-400 to-cyan-400',
  research: 'from-emerald-400 to-teal-400',
  internship: 'from-cyan-400 to-teal-400',
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 bg-base-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-500/3 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-500/3 blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400">
            Experience
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Professional{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Building expertise through impactful projects and research.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-emerald-400 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2 pl-8 md:pl-0`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-0 md:left-auto top-6 h-4 w-4 rounded-full bg-gradient-to-r ${
                  typeColors[exp.type]
                } shadow-lg transform -translate-x-1/2 md:-translate-x-1/2 ${
                  index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0'
                }`}
              />

              {/* Card */}
              <div
                className={`rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 hover-lift ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                {/* Header */}
                <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${typeColors[exp.type]} p-0.5`}>
                    <div className="h-full w-full rounded-xl bg-base-900 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-teal-400 font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className={`flex flex-wrap gap-4 mb-4 text-sm text-slate-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Contributions */}
                <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-300"
                      style={index % 2 === 0 ? { flexDirection: 'row-reverse' } : {}}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.linkedin.com/in/sowjanya-s-k-susarla-498632308"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View Full Profile
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
