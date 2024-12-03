import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Navbar from './components/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Next E-commerce',
  description: 'Next E-commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-700`}
      >
        <Navbar/>
        <main className=' h-screen p-16'>{children}</main>
      </body>
    </html>
  );
}
