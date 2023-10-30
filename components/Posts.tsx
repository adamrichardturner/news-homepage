import { FC } from 'react';
import Image from 'next/image';

const Posts: FC = () => {
  return (
    <section className='posts flex flex-col gap-3 lg:flex-row lg:gap-6'>
      <div className='post flex w-full flex-row lg:w-1/3'>
        <div
          className='imgContainer'
          style={{ position: 'relative', height: '100px', width: '127px' }}
        >
          <Image
            fill
            src='/image-retro-pcs.jpg'
            alt='Reviving retro PCs'
            unoptimized
          />
        </div>
        <div className='ml-2 lg:ml-4'>
          <h3 className='text-2xl font-bold text-gray-400'>01</h3>
          <h4 className='pt-1.25 hover:text-primary-soft-red cursor-pointer pb-2 font-bold'>
            Reviving Retro PCs
          </h4>
          <p className='text-neutral-dark-grayish-blue text-xs'>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className='post flex w-full flex-row lg:w-1/3'>
        <div
          className='imgContainer'
          style={{ position: 'relative', height: '100px', width: '127px' }}
        >
          <Image fill src='/image-top-laptops.jpg' alt='Top Laptops' />
        </div>
        <div className='ml-2 lg:ml-4'>
          <h3 className='text-2xl font-bold text-gray-400'>02</h3>
          <h4 className='pt-1.25 hover:text-primary-soft-red cursor-pointer pb-2 font-bold'>
            Top 10 Laptops of 2022
          </h4>
          <p className='text-neutral-dark-grayish-blue text-xs'>
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className='post flex w-full flex-row lg:w-1/3'>
        <div
          className='imgContainer'
          style={{ position: 'relative', height: '100px', width: '127px' }}
        >
          <Image fill src='/image-gaming-growth.jpg' alt='Growth of Gaming' />
        </div>
        <div className='ml-2 lg:ml-4'>
          <h3 className='text-2xl font-bold text-gray-400'>03</h3>
          <h4 className='pt-1.25 hover:text-primary-soft-red cursor-pointer pb-2 font-bold'>
            The Growth of Gaming
          </h4>
          <p className='text-neutral-dark-grayish-blue text-xs'>
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Posts;
