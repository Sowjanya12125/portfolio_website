'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code, Shield, Brain, Coffee } from 'lucide-react';

const timelineItems = [
  {
    year: '2026',
    title: 'Present',
    description: 'Building AI-powered solutions, full-stack applications, and contributing to open source',
    icon: Brain,
  },
  {
    year: '2025',
    title: 'Advanced ML & Research',
    description: 'Bayesian Uncertainty Quantification, Credit Risk Prediction, Autonomous AI Agents',
    icon: Code,
  },
  {
    year: '2024',
    title: 'Hackathons & Cybersecurity',
    description: 'ISRO Hackathon winner, security research, AI projects',
    icon: Shield,
  },
  {
    year: '2023',
    title: 'CS Engineering Journey Begins',
    description: 'Started B.Tech in Computer Science',
    icon: GraduationCap,
  },
];

const stats = [
  { label: 'CGPA', value: '8.5+', icon: GraduationCap },
  { label: 'Projects', value: '15+', icon: Code },
  { label: 'Hackathons', value: '5+', icon: Shield },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 bg-base-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400">
            About Me
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Discovering the Intersection of{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI & Engineering
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            A passionate Computer Science Engineer driven by curiosity and the desire to build impactful solutions.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-slate-800/50 border border-slate-700/50 p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-teal-500/10 p-2">
                <Coffee className="h-full w-full text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Who I Am</h3>
            </div>

            <p className="mb-6 text-slate-300 leading-relaxed">
              I'm a Computer Science Engineer with a strong foundation in AI/ML, full-stack development, and cybersecurity.
              My journey in tech began with curiosity about how systems work, leading me to explore everything from
              low-level security vulnerabilities to high-level AI architectures.
            </p>

            <p className="mb-8 text-slate-400 leading-relaxed">
              I believe in building solutions that not only solve problems but also push the boundaries of what's possible.
              Whether it's developing an AI assistant, predicting credit risks, or quantifying uncertainty in ML models,
              I approach every challenge with creativity and precision.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center rounded-2xl bg-slate-900/50 p-4"
                >
                  <stat.icon className="mx-auto mb-2 h-5 w-5 text-teal-400" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 text-slate-400">
              <MapPin className="h-4 w-4 text-teal-400" />
              <span>India</span>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <h3 className="mb-8 text-xl font-bold text-white">My Journey</h3>

            {/* Timeline Line */}
            <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-emerald-400 to-transparent" />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="relative pl-12"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-base-900 border-2 border-teal-400 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-teal-400" />
                  </div>

                  {/* Content */}
                  <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-4 hover-lift">
                    <div className="mb-1 text-sm font-medium text-teal-400">{item.year}</div>
                    <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-10 rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6"
            >
              <h4 className="mb-4 font-semibold text-white">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Open Source',
                  'Machine Learning',
                  'Cybersecurity Research',
                  'System Design',
                  'Tech Writing',
                  'Problem Solving',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full bg-teal-500/10 px-3 py-1.5 text-sm text-teal-400"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
