'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HighlightedText from './HighlightedText';

export function AnimatedHighlightText({
  words = ['Word 1', 'Word 2', 'Word 3'],
}: {
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 5000);
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="2xl:text-7xl text-5xl tracking-tighter md:text-6xl md:leading-[4rem] w-fit gap-1.5">
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          <HighlightedText className="2xl:text-7xl text-5xl">
            {words[index]}
          </HighlightedText>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
