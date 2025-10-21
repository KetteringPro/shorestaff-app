import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShoreStaff',
  description: 'Revolutionizing how the service industry staffs up — faster, smarter, and on your terms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="ShoreStaff" />
        <meta property="og:description" content="Staffing the coast, one restaurant at a time." />
        <meta property="og:image" content="https://shorestaff.app/images/og/shorestaff-preview.png" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-gradient-to-b from-[#0d9488] to-white">
          {children}
        </div>
      </body>
    </html>
  );
}