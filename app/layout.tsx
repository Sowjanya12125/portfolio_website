import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Providers from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sowjanya SK Susarla | AI Developer & Full Stack Engineer',
  description:
    'Computer Science Engineer specializing in AI/ML, Full Stack Development, and Cybersecurity. Building intelligent systems at the intersection of AI and scalable software engineering.',
  keywords: [
    'Sowjanya SK Susarla',
    'AI Developer',
    'Full Stack Developer',
    'Machine Learning',
    'Cybersecurity',
    'Computer Science Engineer',
    'Python',
    'React',
    'TensorFlow',
  ],
  authors: [{ name: 'Sowjanya SK Susarla' }],
  creator: 'Sowjanya SK Susarla',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sowjanya.dev',
    title: 'Sowjanya SK Susarla | AI Developer & Full Stack Engineer',
    description:
      'Computer Science Engineer specializing in AI/ML, Full Stack Development, and Cybersecurity.',
    siteName: 'Sowjanya SK Susarla Portfolio',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'Sowjanya SK Susarla Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sowjanya SK Susarla | AI Developer & Full Stack Engineer',
    description:
      'Computer Science Engineer specializing in AI/ML, Full Stack Development, and Cybersecurity.',
    images: ['https://bolt.new/static/og_default.png'],
    creator: '@sowjanya',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
