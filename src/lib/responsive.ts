// Responsive breakpoints
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
} as const;

// Responsive spacing scale
export const spacing = {
  xs: '0.5rem', // 8px
  sm: '1rem', // 16px
  md: '1.5rem', // 24px
  lg: '2rem', // 32px
  xl: '3rem', // 48px
  '2xl': '4rem', // 64px
  '3xl': '6rem', // 96px
  '4xl': '8rem', // 128px
} as const;

// Responsive font sizes
export const fontSizes = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem', // 72px
  '8xl': '6rem', // 96px
  '9xl': '8rem', // 128px
} as const;

// Responsive padding/margin helpers
export const responsiveSpacing = {
  // Container padding
  container: {
    xs: '1rem', // 16px
    sm: '2rem', // 32px
    lg: '4rem', // 64px
    xl: '5rem', // 80px
    '2xl': '6rem', // 96px
  },
  // Section spacing
  section: {
    xs: '2rem', // 32px
    sm: '3rem', // 48px
    lg: '5rem', // 80px
    xl: '7rem', // 112px
    '2xl': '9rem', // 144px
  },
  // Component spacing
  component: {
    xs: '1rem', // 16px
    sm: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
  },
} as const;

// Responsive grid columns
export const gridCols = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
  '2xl': 6,
} as const;

// Responsive gap sizes
export const gaps = {
  xs: '0.5rem', // 8px
  sm: '1rem', // 16px
  md: '1.5rem', // 24px
  lg: '2rem', // 32px
  xl: '3rem', // 48px
  '2xl': '4rem', // 64px
} as const;

// Utility function to get responsive value
export function getResponsiveValue<T>(
  values: Record<string, T>,
  defaultValue: T
): T {
  // This function can be used to get responsive values based on screen size
  // You can extend this to use actual window size detection if needed
  return defaultValue;
}

// Common responsive class combinations
export const responsiveClasses = {
  // Text sizes
  heading: {
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
    h3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
    h4: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
  },
  // Spacing
  section: 'py-8 sm:py-12 lg:py-20 xl:py-28',
  container: 'px-4 sm:px-8 lg:px-16 xl:px-20',
  // Grid
  grid: {
    '2-cols': 'grid-cols-1 sm:grid-cols-2',
    '3-cols': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '4-cols': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  },
  // Flexbox
  flex: {
    'col-mobile': 'flex-col sm:flex-row',
    'row-mobile': 'flex-row sm:flex-col',
  },
} as const;
