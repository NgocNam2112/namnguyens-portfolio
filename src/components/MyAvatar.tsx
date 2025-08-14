'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface MyAvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const MyAvatar = ({
  src,
  alt,
  size = 'lg',
  className = '',
}: MyAvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
    xl: 'w-48 h-48',
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner glow ring */}
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main avatar container */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border-8 border-primary/60 shadow-2xl"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        {/* Avatar image */}
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          priority
        />

        {/* Loading shimmer effect */}
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 rounded-full shadow-inner" />
      </motion.div>

      {/* Floating particles effect */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/60 rounded-full"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </motion.div>
  );
};
