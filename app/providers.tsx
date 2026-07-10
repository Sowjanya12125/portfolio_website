'use client';

import { MotionConfig } from 'framer-motion';
import Cursor from '@/components/Cursor';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      {children}
    </MotionConfig>
  );
}
