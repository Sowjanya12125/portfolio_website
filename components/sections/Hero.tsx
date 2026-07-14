'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { fadeUp, staggerContainer } from '@/lib/motion';

const roles = [
  'AI Developer',
  'Full Stack Developer',
  'ML Researcher',
  'Cybersecurity Enthusiast',
];

const HERO_IMAGE = '/images/WhatsApp_Image_2026-07-06_at_11.23.59_AM copy.jpeg';

function useTypewriter(words: string[], opts?: { typeSpeed?: number; deleteSpeed?: number; pause?: number }) {
  const typeSpeed = opts?.typeSpeed ?? 90;
  const deleteSpeed = opts?.deleteSpeed ?? 45;
  const pause = opts?.pause ?? 1600;

  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const fullWord = words[wordIndex];

    if (phase === 'typing') {
      if (text.length < fullWord.length) {
        const t = setTimeout(() => setText(fullWord.slice(0, text.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('pausing'), pause);
      return () => clearTimeout(t);
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), pause);
      return () => clearTimeout(t);
    }

    // deleting
    if (text.length > 0) {
      const t = setTimeout(() => setText(fullWord.slice(0, text.length - 1)), deleteSpeed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setPhase('typing');
    }, 300);
    return () => clearTimeout(t);
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const typed = useTypewriter(roles);

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

      {/* Hero image — right side, smaller, background removed via mix-blend + mask */}
      <motion.div
        style={{ y: imageY }}
        className="absolute right-0 top-0 z-[5] hidden h-full w-[40%] lg:block"
      >
        <div className="relative flex h-full items-center justify-center pr-12">
          {/* Pulsing glow behind image */}
          <motion.div
            className="absolute h-[320px] w-[320px] rounded-full bg-accent/[0.08] blur-[80px]"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Image with fade+scale in, then continuous float */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Continuous float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
              style={{
                maskImage: 'radial-gradient(ellipse 75% 80% at 50% 45%, black 55%, transparent 92%)',
                WebkitMaskImage: 'radial-gradient(ellipse 75% 80% at 50% 45%, black 55%, transparent 92%)',
              }}
            >
              <img
                src={HERO_IMAGE}
                alt="Sowjanya SK Susarla"
                className="h-[340px] w-[280px] rounded-full object-cover"
                style={{ objectPosition: 'center 15%' }}
                draggable={false}
              />
            </motion.div>

            {/* Decorative ring around image */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
      </motion.div>

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

          {/* Role line — animated typewriter */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-2"
          >
            <span className="font-display text-xl font-medium text-cream-200 md:text-2xl">
              Computer Science Engineer
            </span>
            <span className="text-cream-600">/</span>
            <span className="inline-flex items-center text-lg font-medium text-accent md:text-xl">
              <span>{typed}</span>
              <motion.span
                className="ml-0.5 inline-block h-[1.1em] w-[2px] bg-accent"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
              />
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

            <MagneticButton
              href="/Sowjanya_Resume_infosys.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-600 px-7 py-3.5 text-sm font-medium text-cream-200 transition-colors hover:border-accent hover:text-accent"
            >
              <FileDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
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
