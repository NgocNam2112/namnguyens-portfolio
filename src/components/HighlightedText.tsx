import React from 'react';
import { cn } from '@/lib/utils';

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function HighlightedText({
  children,
  className,
}: HighlightedTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
