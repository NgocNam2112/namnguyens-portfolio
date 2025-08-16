import React from 'react';
import { motion } from 'framer-motion';
import {
  containerVariants,
  contentVariants,
  itemVariants,
} from '@/app/about/constants';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  headline: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

const PageWrapper = ({
  children,
  headline,
  description,
  footer,
  className,
  wrapperClassName,
}: PageWrapperProps) => {
  return (
    <motion.div
      className="container pt-20 relative h-screen flex flex-col overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div
        className={cn(
          'mx-auto max-w-5xl flex flex-col flex-1',
          wrapperClassName || 'overflow-hidden'
        )}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center flex-shrink-0 mt-6 sm:mt-10"
          variants={itemVariants}
        >
          {headline}
        </motion.h2>

        {description && (
          <motion.p
            className="text-center text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto flex-shrink-0"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          className={cn('relative flex-1 custom-scrollbar', className)}
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
