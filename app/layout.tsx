import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { Toaster } from '@/components/ui/sonner';
import { StructuredData, websiteStructuredData, personStructuredData } from '@/components/structured-data';
import { SettingsToggle } from '@/components/settings-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rafaelaquila.com'),
  title: {
    default: 'Rafael Áquila - Full-Stack Developer',
    template: '%s | Rafael Áquila - Full-Stack Developer'
  },
  description: 'Rafael Áquila is a Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js and modern technologies. See my portfolio with innovative projects and contact me for collaborations.',
  keywords: [
    'Rafael Áquila',
    'Full-Stack Developer',
    'React Developer',
    'Frontend Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Backend Developer',
    'Portfolio',
    'Web Developer',
    'JavaScript Developer',
    'PHP',
    'Laravel',
    'API Development',
    'Responsive Design',
    'SEO',
    'Brasil'
  ],
  authors: [{ name: 'Rafael Áquila', url: 'https://rafaelaquila.com' }],
  creator: 'Rafael Áquila',
  publisher: 'Rafael Áquila',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url: 'https://rafaelaquila.com',
    title: 'Rafael Áquila - Full-Stack Developer | React, Next.js, TypeScript',
    description: 'Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js. See my portfolio with innovative projects and modern web solutions.',
    siteName: 'Rafael Áquila Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Áquila - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js',
    creator: '@orafaelaquila',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://rafaelaquila.com',
    languages: {
      'en': 'https://rafaelaquila.com',
      'pt-BR': 'https://rafaelaquila.com/pt',
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q65D672RME"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q65D672RME');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StructuredData data={websiteStructuredData} />
        <StructuredData data={personStructuredData} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-preference"
        >
          <LanguageProvider>
            <main className="min-h-screen">
              {children}
            </main>
            <SettingsToggle />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}