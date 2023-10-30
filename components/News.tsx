import { FC } from 'react';

const News: FC = () => {
  return (
    <section className='news bg-neutral-very-dark-blue px-5 py-6 text-white'>
      <h2 className='text-primary-soft-orange pb-4 text-4xl font-medium'>
        New
      </h2>
      <div className='items space-y-2 divide-y divide-gray-500'>
        <div className='item'>
          <h3 className='hover:text-primary-soft-orange cursor-pointer text-xl font-medium text-white'>
            Hydrogen VS Electric Cars
          </h3>
          <p className='pb-4 pt-2 text-sm text-gray-300'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className='item'>
          <h3 className='hover:text-primary-soft-orange cursor-pointer pt-4 text-xl font-medium text-white'>
            The Downsides of AI Atristry
          </h3>
          <p className='pb-4 pt-2 text-sm text-gray-300'>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className='item'>
          <h3 className='hover:text-primary-soft-orange cursor-pointer pt-4 text-xl font-medium text-white'>
            Is VC Funding Drying Up?
          </h3>
          <p className='pb-4 pt-2 text-sm text-gray-300'>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;
