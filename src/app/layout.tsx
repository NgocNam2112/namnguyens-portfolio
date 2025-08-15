import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { StarBackground } from '@/components/StarBackground';
import { Navbar } from '@/components/Navbar';
import { AnimatedCursor } from '@/components/AnimatedCursor';
import { QueryProvider } from '@/components/provider/QueryProvider';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nam Nguyen Portfolio',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <QueryProvider>
          <AnimatedCursor />
          <Navbar />
          <StarBackground />
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
