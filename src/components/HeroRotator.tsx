'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroRotatorProps {
  phrases?: string[];
  interval?: number; // ms
}

export default function HeroRotator({
  phrases = ['Mastering Negotiation', 'Empowering Leaders', 'Real-World Simulations'],
  interval = 3000,
}: HeroRotatorProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % phrases.length), interval);
    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <div aria-hidden className="mt-3 h-7 flex items-center justify-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.45 }}
          className="text-sm sm:text-base text-gray-300"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
