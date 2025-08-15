'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}

const ContainerWrapper = ({
  children,
  className,
  as: Component = 'div',
  size = 'lg',
  padding = 'md',
  maxWidth = '2xl',
}: ContainerWrapperProps) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6 lg:px-8',
    md: 'px-4 sm:px-8 lg:px-12 xl:px-16',
    lg: 'px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24',
    xl: 'px-4 sm:px-8 lg:px-20 xl:px-24 2xl:px-32',
  };

  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ContainerWrapper;
