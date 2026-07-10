'use client';

import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiPostman,
  SiFigma,
} from 'react-icons/si';
import { ShieldCheck, Bug, Cloud } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Rust', icon: SiRust, color: '#CE422B' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Keras', icon: SiKeras, color: '#D00000' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Cybersecurity',
    skills: [
      { name: 'Network Security', icon: ShieldCheck, color: '#e07a5f' },
      { name: 'Penetration Testing', icon: Bug, color: '#e07a5f' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'AWS', icon: Cloud, color: '#FF9900' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding bg-ink-950">
      {/* Faint accent glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent/[0.03] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-eyebrow mb-6">
            Toolkit
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display text-[clamp(2.5rem,7vw,5rem)] text-cream-100"
          >
            Skills &amp; technologies<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base text-cream-500 md:text-lg"
          >
            A diverse toolkit spanning AI, full-stack development, and
            cybersecurity.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 p-6 transition-colors hover:border-ink-500"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl" />
              </div>

              <h3 className="relative mb-6 text-sm font-medium uppercase tracking-wider text-cream-600 transition-colors group-hover:text-accent">
                {category.title}
              </h3>

              <div className="relative flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1"
                  >
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-ink-600 bg-ink-850 p-1.5 transition-colors group-hover:border-ink-500"
                    >
                      <skill.icon className="h-5 w-5" style={{ color: skill.color }} />
                    </span>
                    <span className="text-base font-medium text-cream-200 transition-colors hover:text-accent">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
