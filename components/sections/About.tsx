'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

const timelineItems = [
  {
    year: '2026',
    title: 'Present',
    description: 'Building AI-powered solutions, full-stack applications, and contributing to open source.',
  },
  {
    year: '2025',
    title: 'Advanced ML & Research',
    description: 'Bayesian Uncertainty Quantification, Credit Risk Prediction, Autonomous AI Agents.',
  },
  {
    year: '2024',
    title: 'Hackathons & Cybersecurity',
    description: 'ISRO Hackathon Round 2, security research, AI projects.',
  },
  {
    year: '2023',
    title: 'CS Engineering Journey Begins',
    description: 'Started B.Tech in Computer Science.',
  },
];

const stats = [
  { label: 'CGPA', value: '8.5+' },
  { label: 'Projects', value: '15+' },
  { label: 'Hackathons', value: '5+' },
];

const interests = [
  'Open Source',
  'Machine Learning',
  'Cybersecurity Research',
  'System Design',
  'Tech Writing',
  'Problem Solving',
];

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-ink-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-16 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left column — heading */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="text-eyebrow mb-6">About</p>
            <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-cream-100">
              The intersection of AI &amp; engineering<span className="text-accent">.</span>
            </h2>
          </motion.div>

          {/* Right column — content */}
          <div className="lg:col-span-7">
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-cream-400 md:text-xl"
            >
              I&apos;m a Computer Science Engineer with a strong foundation in
              AI/ML, full-stack development, and cybersecurity. My journey in
              tech began with curiosity about how systems work, leading me to
              explore everything from low-level security vulnerabilities to
              high-level AI architectures.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-cream-500"
            >
              I believe in building solutions that not only solve problems but
              also push the boundaries of what&apos;s possible. Whether it&apos;s
              developing an AI assistant, predicting credit risks, or
              quantifying uncertainty in ML models, I approach every challenge
              with creativity and precision.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-display text-3xl text-cream-100 md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-cream-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-2 text-sm text-cream-500"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span>India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Journey timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-24 border-t border-ink-700 pt-16"
        >
          <motion.h3
            variants={fadeUp}
            className="mb-12 text-eyebrow"
          >
            Journey
          </motion.h3>

          <div className="space-y-0">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className="group grid grid-cols-1 gap-4 border-b border-ink-700 py-8 transition-colors hover:border-cream-600 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-2">
                  <span className="font-display text-2xl font-bold text-cream-600 transition-colors group-hover:text-accent md:text-3xl">
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-lg font-semibold text-cream-200">
                    {item.title}
                  </h4>
                </div>
                <div className="md:col-span-6">
                  <p className="text-sm text-cream-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 flex flex-wrap gap-3"
        >
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-ink-600 px-4 py-2 text-sm text-cream-500 transition-colors hover:border-accent hover:text-accent"
            >
              {interest}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
