import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Posts from '@/components/Posts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Header />
      <main className='gridContainer container'>
        <Hero />
        <News />
        <Posts />
      </main>
    </div>
  );
}
