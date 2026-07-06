'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

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

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-base-900 border-t border-slate-800">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

      <div className="section-container py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 opacity-80" />
              <span className="relative flex h-full w-full items-center justify-center text-lg font-bold text-white">
                SK
              </span>
            </div>
            <div>
              <span className="font-display text-lg font-bold text-white">
                Sowjanya SK Susarla
              </span>
              <p className="text-xs text-slate-400">Computer Science Engineer</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-teal-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border border-slate-700 bg-slate-800/50 p-2.5 text-slate-400 transition-all hover:border-teal-500/50 hover:text-teal-400"
              >
                <link.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-800" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-slate-400"
          >
            Made with{' '}
            <Heart className="h-4 w-4 text-rose-400 fill-rose-400" />{' '}
            by Sowjanya SK Susarla
          </motion.p>

          {/* Copyright Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate-500"
          >
            &copy; {currentYear} All rights reserved.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-400 transition-all hover:border-teal-500/50 hover:text-teal-400"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Back to Top
          </motion.button>
        </div>
      </div>

      {/* Gradient Orb Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-96 rounded-full bg-teal-500/3 blur-3xl pointer-events-none" />
    </footer>
  );
}
