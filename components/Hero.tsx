import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className='hero w-full'>
      <div className='heroImage'>
        <picture>
          <source media='(max-width: 767px)' srcSet='/image-web-3-mobile.jpg' />
          <Image
            fill
            src='/image-web-3-desktop.jpg'
            alt='Image of Web 3'
            sizes='100%'
          />
        </picture>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex-1 justify-center align-middle'>
          <h1 className='text-neutral-very-dark-blue pt-6 text-4xl font-extrabold lg:text-5xl'>
            The Bright
            <br /> Future of
            <br /> Web 3.0?
          </h1>
        </div>
        <div className='flex-1 lg:ml-8'>
          <p className='text-neutral-dark-grayish-blue py-6 text-xs lg:text-sm'>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className='hover:bg-neutral-very-dark-blue bg-primary-soft-red flex w-1/2 cursor-pointer justify-center px-2 py-2 align-middle font-medium uppercase tracking-widest text-white lg:w-3/4'>
            <p className='text-sm'>Read More</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
