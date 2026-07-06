'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, FileText, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'AI Developer',
  'Full Stack Developer',
  'ML Researcher',
  'Cybersecurity Enthusiast',
];

const floatingTechIcons = [
  { name: 'Python', delay: 0 },
  { name: 'React', delay: 0.5 },
  { name: 'TensorFlow', delay: 1 },
  { name: 'Node.js', delay: 1.5 },
  { name: 'TypeScript', delay: 2 },
  { name: 'PyTorch', delay: 2.5 },
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cardRotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const cardRotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-base-950"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 h-64 w-64 rounded-full bg-cyan-500/3 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(45, 212, 191, 0.02) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-teal-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-lg text-slate-400"
            >
              Hi there, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">Sowjanya SK</span>
              <span className="block bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Susarla</span>
            </motion.h1>

            {/* Role Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 flex min-h-[2rem] items-center justify-center text-xl text-slate-300 sm:text-2xl lg:justify-start"
            >
              <span className="text-teal-400">Computer Science Engineer</span>
              <span className="ml-2 text-slate-600">|</span>
              <span className="ml-3">
                <span className="text-white">{displayedText}</span>
                <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-teal-400" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 max-w-lg text-lg text-slate-400 sm:text-xl"
            >
              Building intelligent systems at the intersection of AI, security, and scalable software engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ChevronDown className="h-4 w-4" />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="btn-secondary flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <Mail className="h-4 w-4" />
              </motion.button>

              <motion.a
                href="mailto:kameshwarisowjanya@gmail.com?subject=Resume Request&body=Hi, I would like to request your resume."
                className="btn-secondary flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Resume
                <FileText className="h-4 w-4" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
            >
              <motion.a
                href="https://github.com/Sowjanya12125"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 bg-slate-800/50 p-3 text-slate-400 transition-all hover:border-teal-500/50 hover:text-teal-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sowjanya-s-k-susarla-498632308"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 bg-slate-800/50 p-3 text-slate-400 transition-all hover:border-teal-500/50 hover:text-teal-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto hidden lg:block"
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              style={{
                rotateX: cardRotateX,
                rotateY: cardRotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative h-96 w-80 rounded-3xl bg-slate-800/50 border border-slate-700/50 p-8 backdrop-blur-sm"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 blur-xl opacity-50" />

              {/* Profile Image Placeholder */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
                    SKS
                  </div>
                  {/* Glow Ring */}
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-teal-400/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="mb-2 text-xl font-bold text-white">Sowjanya SK Susarla</h3>
                <p className="text-sm text-slate-400">Computer Science Engineer</p>

                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {['Python', 'AI/ML', 'React', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Icons */}
              {floatingTechIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="absolute h-10 w-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-xs font-medium text-white"
                  style={{
                    left: `${20 + (index % 3) * 30}%`,
                    top: `${10 + Math.floor(index / 2) * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: tech.delay,
                  }}
                >
                  {tech.name.slice(0, 2)}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
