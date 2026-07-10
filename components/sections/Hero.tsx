'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { fadeUp, staggerContainer } from '@/lib/motion';

const roles = [
  'AI Developer',
  'Full Stack Developer',
  'ML Researcher',
  'Cybersecurity Enthusiast',
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-ink-950"
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Faint accent glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 md:px-12"
      >
        {/* Eyebrow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-eyebrow mb-8"
          >
            <span className="mr-3 inline-block h-2 w-2 animate-pulse rounded-full bg-accent align-middle" />
            Available for opportunities — 2026
          </motion.p>

          {/* Name — oversized display type */}
          <motion.h1
            variants={fadeUp}
            className="text-display text-[clamp(3rem,11vw,9rem)] leading-[0.9] text-cream-100"
          >
            <span className="block">Sowjanya</span>
            <span className="block">
              SK Susarla
              <span className="text-accent">.</span>
            </span>
          </motion.h1>

          {/* Role line */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-2"
          >
            <span className="font-display text-xl font-medium text-cream-200 md:text-2xl">
              Computer Science Engineer
            </span>
            <span className="text-cream-600">/</span>
            <span className="text-lg text-cream-500 md:text-xl">
              {roles.join(' · ')}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream-500 md:text-lg"
          >
            Building intelligent systems at the intersection of AI, security,
            and scalable software engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-300"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-7 py-3.5 text-sm font-medium text-cream-200 transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-cream-600 transition-colors hover:text-accent"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
