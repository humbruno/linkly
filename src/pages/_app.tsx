import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>
      <Header />
      <main className="mx-auto max-w-screen-2xl">
        <Component {...pageProps} />
      </main>
    </>
  );
}
