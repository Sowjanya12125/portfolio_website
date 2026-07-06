'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Trophy, Award, BadgeCheck, Users, Star, Target } from 'lucide-react';

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  type: 'hackathon' | 'award' | 'certification' | 'research';
}

const achievements: Achievement[] = [
  {
    title: 'ISRO Hackathon Winner',
    organization: 'Indian Space Research Organisation',
    year: '2024',
    description: 'Led team to victory in national-level space technology hackathon',
    icon: Trophy,
    type: 'hackathon',
  },
  {
    title: 'Research Internship',
    organization: 'ML Research Laboratory',
    year: '2025',
    description: 'Conducted research on Bayesian uncertainty quantification in deep learning',
    icon: Award,
    type: 'research',
  },
  {
    title: 'Cisco Networking Essentials',
    organization: 'Cisco',
    year: '2024',
    description: 'Professional certification in networking fundamentals',
    icon: BadgeCheck,
    type: 'certification',
  },
  {
    title: 'Ethereum & Solidity',
    organization: 'Blockchain Academy',
    year: '2024',
    description: 'Certified in smart contract development and blockchain technology',
    icon: BadgeCheck,
    type: 'certification',
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    year: '2023 - Present',
    description: 'Active contributor to multiple open-source projects',
    icon: Star,
    type: 'award',
  },
  {
    title: 'Hackathon Participant',
    organization: 'Multiple Events',
    year: '2023 - 2026',
    description: 'Participated in 5+ national and international hackathons',
    icon: Users,
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
    if (isInView) {
      const duration = 2000;
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
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

const typeColors = {
  hackathon: 'from-amber-400 to-orange-400',
  award: 'from-teal-400 to-cyan-400',
  certification: 'from-emerald-400 to-teal-400',
  research: 'from-green-400 to-emerald-400',
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-24 bg-base-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-teal-500/3 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-emerald-500/3 blur-3xl" />
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
            Achievements
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Recognition &{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            A collection of achievements that highlight dedication and expertise.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 text-center hover-lift"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center text-xl font-semibold text-white">
            Professional Certifications
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => a.type === 'certification')
              .map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 transition-all hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${typeColors[cert.type]} p-0.5`}>
                      <div className="h-full w-full rounded-xl bg-base-900 flex items-center justify-center">
                        <cert.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-slate-400">{cert.organization}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">{cert.description}</p>
                  <div className="mt-4 text-xs text-teal-400">{cert.year}</div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Timeline Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mb-8 text-center text-xl font-semibold text-white">
            Key Milestones
          </h3>
          <div className="relative mx-auto max-w-3xl">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-emerald-400 to-cyan-400" />

            <div className="space-y-6">
              {achievements
                .filter((a) => a.type !== 'certification')
                .map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Node */}
                    <div className={`absolute left-0 top-0 h-8 w-8 rounded-full bg-gradient-to-r ${typeColors[achievement.type]} flex items-center justify-center shadow-lg`}>
                      <achievement.icon className="h-4 w-4 text-white" />
                    </div>

                    {/* Content */}
                    <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-5 hover-lift">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-white mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-teal-400">{achievement.organization}</p>
                          <p className="mt-2 text-sm text-slate-400">
                            {achievement.description}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
