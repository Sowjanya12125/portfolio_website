'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import MagneticButton from '@/components/MagneticButton';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Sowjanya12125',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sowjanya-s-k-susarla-498632308',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:kameshwarisowjanya@gmail.com',
    icon: Mail,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Large CTA */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="section-padding text-center"
      >
        <motion.p variants={fadeUp} className="text-eyebrow mb-8">
          Let&apos;s build something
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-display text-[clamp(2rem,7vw,5.5rem)] leading-[0.9] text-cream-100"
        >
          Let&apos;s talk<span className="text-accent">.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href="mailto:kameshwarisowjanya@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-300"
          >
            kameshwarisowjanya@gmail.com
          </MagneticButton>

          <MagneticButton
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-8 py-4 text-sm font-medium text-cream-200 transition-colors hover:border-accent hover:text-accent"
          >
            Contact form
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="mx-auto h-px max-w-7xl bg-ink-700" />

      {/* Bottom section */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-cream-200">
              SKS
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-cream-500 transition-colors hover:border-accent hover:text-accent"
              >
                <link.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-sm text-cream-500 transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 text-xs text-cream-700 md:flex-row">
          <p>&copy; {currentYear} Sowjanya SK Susarla. All rights reserved.</p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>

      {/* Faint accent glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-96 -translate-x-1/2 rounded-full bg-accent/[0.03] blur-3xl" />
    </footer>
  );
}
