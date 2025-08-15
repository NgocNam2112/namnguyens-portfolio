'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TextWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'accent';
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
}

const TextWrapper = ({
  children,
  className,
  as: Component = 'p',
  variant = 'p',
  size = 'base',
  weight = 'normal',
  align = 'left',
  color = 'default',
  leading = 'normal',
}: TextWrapperProps) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };

  const weightClasses = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const colorClasses = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary-foreground',
    accent: 'text-accent-foreground',
  };

  const leadingClasses = {
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  };

  // Responsive size classes for headings
  const responsiveSizeClasses = {
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
    h3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
    h4: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
    h5: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
    h6: 'text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl',
  };

  const finalSizeClasses = variant.startsWith('h')
    ? responsiveSizeClasses[variant as keyof typeof responsiveSizeClasses]
    : sizeClasses[size];

  return (
    <Component
      className={cn(
        finalSizeClasses,
        weightClasses[weight],
        alignClasses[align],
        colorClasses[color],
        leadingClasses[leading],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default TextWrapper;
