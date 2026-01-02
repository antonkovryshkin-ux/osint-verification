import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'OSINT Verification | Secure Digital Scan',
  description: 'Professional OSINT search through 120+ public registries. Instant verification.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(inter.variable, 'min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20')} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
