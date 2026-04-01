// app/layout.tsx
import './globals.css';
import { Raleway } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Margarita Portfolio',
  description: 'Minimalist and professional portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${raleway.className} bg-white text-black min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}