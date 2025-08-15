'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="top-right"
      richColors
      closeButton
      duration={5000}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--success-bg': 'hsl(142.1 76.2% 36.3%)',
          '--success-text': 'hsl(355.7 100% 97.3%)',
          '--success-border': 'hsl(142.1 70.6% 45.3%)',
          '--error-bg': 'hsl(0 84.2% 60.2%)',
          '--error-text': 'hsl(355.7 100% 97.3%)',
          '--error-border': 'hsl(0 72.2% 50.6%)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
