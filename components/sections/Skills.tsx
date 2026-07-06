'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiPostman,
  SiFigma,
  SiRust,
  SiGo,
} from 'react-icons/si';
import { Database, Shield, Code2, Globe, Brain, Cpu, Wrench, Cloud, Code } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Rust', icon: SiRust, color: '#DEA584' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Cpu,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
    ],
  },
  {
    title: 'AI/ML',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Keras', icon: SiKeras, color: '#D00000' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Network Security', icon: Shield, color: '#fbbf24' },
      { name: 'Penetration Testing', icon: Shield, color: '#f97316' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'AWS', icon: Cloud, color: '#FF9900' },
      { name: 'VS Code', icon: Code, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 bg-base-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-emerald-500/3 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-teal-500/3 blur-3xl" />
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
            Skills & Technologies
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Tools I Use to{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Build & Create
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            A diverse toolkit spanning AI, full-stack development, and cybersecurity.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + categoryIndex * 0.1, duration: 0.5 }}
              className="rounded-3xl bg-slate-800/50 border border-slate-700/50 p-6 hover-lift"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-teal-500/10 p-2">
                  <category.icon className="h-full w-full text-teal-400" />
                </div>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.2 + categoryIndex * 0.05 + skillIndex * 0.05,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`group relative flex items-center gap-2 rounded-xl bg-slate-900/50 px-3 py-2 transition-all cursor-pointer ${
                      hoveredSkill === skill.name
                        ? 'bg-slate-900/80 shadow-lg'
                        : ''
                    }`}
                  >
                    <skill.icon
                      className="h-4 w-4 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm text-slate-300 group-hover:text-white">
                      {skill.name}
                    </span>

                    {/* Glow Effect on Hover */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        layoutId="skillGlow"
                        className="absolute -inset-1 rounded-xl bg-teal-500/10 blur-md -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => {
            const Icon = skillCategories[Math.floor(i / 3)].skills[Math.floor(i / 4)]?.icon || Code2;
            return (
              <motion.div
                key={i}
                className="absolute text-teal-400/5"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 25}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <Icon className="h-12 w-12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
