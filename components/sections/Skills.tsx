'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Rust'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI'],
  },
  {
    title: 'AI / ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Cybersecurity',
    skills: ['Network Security', 'Penetration Testing'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'Kubernetes', 'Linux', 'AWS', 'Postman', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding bg-ink-950">
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
          className="mt-16 grid gap-px overflow-hidden border border-ink-700 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              className="group bg-ink-900 p-8 transition-colors hover:bg-ink-850"
            >
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-cream-600 transition-colors group-hover:text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-lg font-medium text-cream-200 transition-colors hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
