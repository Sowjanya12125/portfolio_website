'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [hidden, setHidden] = useState(true);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
      setHidden(false);

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="pointer"], input, textarea, select, label');
      setIsPointer(!!interactive);
    };

    const leave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        x,
        y,
        mixBlendMode: isPointer ? 'normal' : 'difference',
      }}
      animate={{
        opacity: hidden ? 0 : 1,
        scale: isPointer ? 3 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      <motion.div
        className="h-4 w-4 rounded-full border"
        animate={{
          backgroundColor: isPointer ? 'rgba(224, 122, 95, 0)' : 'rgba(245, 242, 237, 1)',
          borderColor: isPointer ? 'rgba(224, 122, 95, 1)' : 'rgba(245, 242, 237, 0)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />
    </motion.div>
  );
}
