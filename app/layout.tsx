import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swipe-A-Shift',
  description: 'Staffing the coast, one restaurant at a time.',
  openGraph: {
    title: 'SSwipe-A-Shift',
    description: 'Staffing the coast, one restaurant at a time.',
    url: 'https://SwipeAShift.app',
    type: 'website',
    images: [
      {
        url: 'https://SwipeAShift.app/images/og/SwipeAShift-preview.png',
        width: 1200,
        height: 630,
        alt: 'SwipeAShift Open Graph Preview',
      },
    ],
  },
  icons: {
    icon: '/favicon_32x32.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png" />
      </head>
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-gradient-to-b from-[#0d9488] to-white">
          {children}
        </div>
      </body>
    </html>
  );
}