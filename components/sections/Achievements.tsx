'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'hackathon' | 'award' | 'certification' | 'research';
}

const achievements: Achievement[] = [
  {
    title: 'ISRO Bharatiya Antariksh Hackathon — Round 2',
    organization: 'Indian Space Research Organisation (National)',
    year: 'Jul 2025',
    description: 'Advanced among hundreds of nationwide teams; built high-complexity data processing algorithms for large-scale satellite and aerospace datasets, presented to ISRO evaluators.',
    type: 'hackathon',
  },
  {
    title: 'Research Intern — Security & Risk Analytics',
    organization: 'India Post, CEPT, Hyderabad',
    year: 'Jul 2025',
    description: 'End-to-end security posture assessment on enterprise networked systems; authored technical brief on probabilistic risk models formally adopted by the team.',
    type: 'research',
  },
  {
    title: 'Cisco Networking Essentials',
    organization: 'Cisco',
    year: 'Dec 2025',
    description: 'Professional certification in networking fundamentals and infrastructure.',
    type: 'certification',
  },
  {
    title: 'Ethereum & Solidity',
    organization: 'Blockchain Academy',
    year: 'Oct 2025',
    description: 'Certified in smart contract development and blockchain technology.',
    type: 'certification',
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    year: '2023 — Present',
    description: 'Active contributor to multiple open-source projects',
    type: 'award',
  },
  {
    title: 'Hackathon Participant',
    organization: 'Multiple Events',
    year: '2023 — 2026',
    description: 'Participated in 5+ national and international hackathons',
    type: 'hackathon',
  },
];

const stats = [
  { label: 'Projects', value: 15, suffix: '+' },
  { label: 'Hackathons', value: 5, suffix: '+' },
  { label: 'Certifications', value: 5, suffix: '' },
  { label: 'Research Papers', value: 2, suffix: '' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-display text-4xl text-cream-100 md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-padding bg-ink-900">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-eyebrow mb-6">
            Recognition
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display text-[clamp(2.5rem,7vw,5rem)] text-cream-100"
          >
            Achievements<span className="text-accent">.</span>
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-ink-700 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-ink-850 p-8 text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm text-cream-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-24"
        >
          <motion.h3 variants={fadeUp} className="mb-8 text-eyebrow">
            Certifications
          </motion.h3>
          <div className="space-y-0">
            {achievements
              .filter((a) => a.type === 'certification')
              .map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={fadeUp}
                  className="group grid grid-cols-1 gap-4 border-b border-ink-700 py-6 transition-colors hover:border-cream-600 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-4">
                    <h4 className="text-lg font-semibold text-cream-200 transition-colors group-hover:text-accent">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-sm text-cream-600">{cert.organization}</p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm text-cream-500">{cert.description}</p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="text-sm text-cream-600">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Key Milestones */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16"
        >
          <motion.h3 variants={fadeUp} className="mb-8 text-eyebrow">
            Key Milestones
          </motion.h3>
          <div className="space-y-0">
            {achievements
              .filter((a) => a.type !== 'certification')
              .map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={fadeUp}
                  className="group grid grid-cols-1 gap-4 border-b border-ink-700 py-6 transition-colors hover:border-cream-600 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-2">
                    <span className="text-sm text-cream-600">{achievement.year}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h4 className="text-lg font-semibold text-cream-200 transition-colors group-hover:text-accent">
                      {achievement.title}
                    </h4>
                    <p className="mt-1 text-sm text-cream-600">{achievement.organization}</p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm text-cream-500">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
