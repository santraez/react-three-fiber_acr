import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.sass';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '♡ A&S ♡',
  description: 'Te amo Andreita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
