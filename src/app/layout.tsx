import type { Metadata } from 'next';
import {
  ClerkProvider
} from '@clerk/nextjs'
import './globals.css';

import { ptBR } from '@clerk/localizations';

import Navbar from './components/Navbar';



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
    <ClerkProvider localization={ptBR}>
      <html lang="en">
      <body
        className={`antialiased bg-slate-700`}
      >
        <Navbar/>
        <main className=' h-screen p-16'>{children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
