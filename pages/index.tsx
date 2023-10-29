import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between space-y-8 md:space-y-24 ${inter.className}`}
      ></main>
    </>
  );
}
