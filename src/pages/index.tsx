import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>home</p>
    </section>
  );
}
