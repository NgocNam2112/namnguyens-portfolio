'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import ContainerWrapper from './ContainerWrapper';

interface SelectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  containerPadding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerMaxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  as?: React.ElementType;
}

const SelectionWrapper = ({
  children,
  className,
  container = true,
  containerSize = 'lg',
  containerPadding = 'md',
  containerMaxWidth = '2xl',
  padding = 'lg',
  margin = 'none',
  as: Component = 'section',
}: SelectionWrapperProps) => {
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-28 xl:py-32',
    '2xl': 'py-24 sm:py-28 lg:py-32 xl:py-36 2xl:py-40',
  };

  const marginClasses = {
    none: '',
    sm: 'my-8',
    md: 'my-12',
    lg: 'my-16 sm:my-20 lg:my-24',
    xl: 'my-20 sm:my-24 lg:my-28 xl:my-32',
    '2xl': 'my-24 sm:my-28 lg:my-32 xl:my-36 2xl:my-40',
  };

  const content = container ? (
    <ContainerWrapper
      size={containerSize}
      padding={containerPadding}
      maxWidth={containerMaxWidth}
    >
      {children}
    </ContainerWrapper>
  ) : (
    children
  );

  return (
    <Component
      className={cn(
        'w-full',
        paddingClasses[padding],
        marginClasses[margin],
        className
      )}
    >
      {content}
    </Component>
  );
};

export default SelectionWrapper;
