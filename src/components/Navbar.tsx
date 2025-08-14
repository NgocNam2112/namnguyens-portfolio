'use client';

import { cn } from '@/lib/utils';
import { Menu, X, Circle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={cn('fixed w-full z-40 transition-all duration-300 py-5')}>
      <div className="container flex items-center justify-between">
        <Link
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Nam</span> Portfolio
          </span>
        </Link>

        <div className="hidden md:block relative">
          <div
            className="relative group"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <motion.div
              className="flex items-center relative"
              animate={{
                width: isNavHovered ? 'auto' : '48px',
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <AnimatePresence>
                {isNavHovered && (
                  <motion.div
                    className="absolute right-full bottom-0 flex items-center space-x-6 mr-4 px-6 py-3 bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      staggerChildren: 0.15,
                    }}
                  >
                    {navItems.map((item, key) => (
                      <motion.div key={key}>
                        <Link
                          href={item.href}
                          className={cn(
                            'text-foreground/80 hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap',
                            isActiveRoute(item.href) &&
                              'text-primary font-semibold'
                          )}
                        >
                          <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            whileHover={{
                              y: -3,
                              transition: { duration: 0.2 },
                            }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: isNavHovered ? 1.1 : 1,
                  borderColor: isNavHovered
                    ? 'hsl(var(--primary))'
                    : 'hsl(var(--primary))',
                  backgroundColor: isNavHovered
                    ? 'hsl(var(--primary) / 0.3)'
                    : 'hsl(var(--primary) / 0.2)',
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                }}
              >
                <Circle className="w-5 h-5 text-primary drop-shadow-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  'text-foreground/80 hover:text-primary transition-colors duration-300',
                  isActiveRoute(item.href) && 'text-primary font-semibold'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
