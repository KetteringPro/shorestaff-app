import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShoreStaff',
  description: 'Staffing the coast, one restaurant at a time.',
  openGraph: {
    title: 'ShoreStaff',
    description: 'Staffing the coast, one restaurant at a time.',
    url: 'https://shorestaff.app',
    type: 'website',
    images: [
      {
        url: 'https://shorestaff.app/images/og/shorestaff-preview.png',
        width: 1200,
        height: 630,
        alt: 'ShoreStaff Open Graph Preview',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-gradient-to-b from-[#0d9488] to-white">
          {children}
        </div>
      </body>
    </html>
  );
}