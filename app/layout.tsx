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
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-gradient-to-b from-[#0d9488] to-white px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}