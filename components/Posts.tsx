import Image from 'next/image';

export default function Posts() {
  return (
    <section className='posts flex flex-row gap-6'>
      <div className='post flex w-1/3 flex-row'>
        <div>
          <Image
            width={100}
            height={127}
            src='/image-retro-pcs.jpg'
            alt='Description of image'
          />
        </div>
        <div className='pl-4'>
          <h3 className='text-2xl font-bold text-gray-400'>01</h3>
          <h4 className='pt-1.25 pb-2 font-bold '>Reviving Retro PCs</h4>
          <p className='text-neutral-dark-grayish-blue text-xs'>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className='post flex w-1/3 flex-row'>
        <div>
          <Image
            width={100}
            height={127}
            src='/image-top-laptops.jpg'
            alt='Description of image'
          />
        </div>
        <div className='pl-4'>
          <h3 className='text-2xl font-bold text-gray-400'>02</h3>
          <h4 className='pt-2 font-bold '>Top 10 Laptops of 2022</h4>
          <p className='text-neutral-dark-grayish-blue text-xs'>
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className='post flex w-1/3 flex-row'>
        <div>
          <Image
            width={100}
            height={127}
            src='/image-gaming-growth.jpg'
            alt='Description of image'
          />
        </div>
        <div className='pl-4'>
          <h3 className='text-2xl font-bold text-gray-400'>03</h3>
          <h4 className='pt-2 font-bold '>The Growth of Gaming</h4>
          <p className='text-neutral-dark-grayish-blue text-xs'>
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
