export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: 'easeOut' as const,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

export const carouselVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut' as const,
      delay: 0.3,
    },
  },
};

export const floatingVariants = {
  initial: { y: 0 },
  float: {
    y: [-8, 8, -8],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      repeatDelay: 1.5,
    },
  },
};

export const scaleVariants = {
  hidden: { scale: 0.85, opacity: 0, y: 20 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.92, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

export const contentVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: 'easeOut' as const,
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 1.15, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

export const techVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.25 + i * 0.08,
      ease: 'easeOut' as const,
    },
  }),
};
