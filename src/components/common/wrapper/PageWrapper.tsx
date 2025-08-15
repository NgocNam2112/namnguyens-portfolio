import React from 'react';
import { motion } from 'framer-motion';
import {
  containerVariants,
  contentVariants,
  itemVariants,
} from '@/app/about/constants';

interface PageWrapperProps {
  children: React.ReactNode;
  headline: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
}

const PageWrapper = ({
  children,
  headline,
  description,
  footer,
}: PageWrapperProps) => {
  return (
    <motion.div
      className="pt-20 relative h-screen flex flex-col pb-4 sm:pb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-5xl flex flex-col flex-1 overflow-hidden px-4 sm:px-0">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center flex-shrink-0"
          variants={itemVariants}
        >
          {headline}
        </motion.h2>

        {description && (
          <motion.p
            className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto flex-shrink-0"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          className="relative flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent hover:scrollbar-thumb-primary/50"
          variants={contentVariants}
        >
          {children}
        </motion.div>

        {footer && (
          <motion.div className="mt-12 flex-shrink-0" variants={itemVariants}>
            {footer}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PageWrapper;
