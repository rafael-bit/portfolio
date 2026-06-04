import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Shell } from '@/components/layout/shell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rafael Áquila - Software Engineer',
  description: 'Rafael Áquila - Software Engineer',
  themeColor: '#00020C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
