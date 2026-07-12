'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ items, speed = 40, reverse = false }: MarqueeProps) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div
      className="group relative w-full overflow-hidden border-y border-ink-700 bg-ink-900 py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-cream-200 transition-colors group-hover:text-cream-500 md:text-2xl">
              {item}
            </span>
            <span className="text-xl text-accent md:text-2xl">✱</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
