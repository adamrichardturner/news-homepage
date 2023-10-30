import { useState, FC } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Burger from '../public/icon-menu.svg';
import Close from '../public/icon-menu-close.svg';

const Header: FC = () => {
  const [menuWidth, setMenuWidth] = useState<string>('0px');

  const handleMenuToggle = () => {
    if (menuWidth === '0px') setMenuWidth('250px');
    else if (menuWidth === '250px') setMenuWidth('0px');
  };

  return (
    <header className='container mx-auto flex flex-row justify-between py-8'>
      <div>
        <Image src={Logo} height={32} alt='Logo' />
      </div>
      <nav className='flex items-center'>
        <ul className='desktopNav text-grayish-blue flex flex-row items-center space-x-8'>
          <li className='hover:text-primary-soft-orange cursor-pointer'>
            Home
          </li>
          <li className='hover:text-primary-soft-orange cursor-pointer'>New</li>
          <li className='hover:text-primary-soft-orange cursor-pointer'>
            Popular
          </li>
          <li className='hover:text-primary-soft-orange cursor-pointer'>
            Trending
          </li>
          <li className='hover:text-primary-soft-orange cursor-pointer'>
            Categories
          </li>
        </ul>
        <Image
          src={Burger}
          height={16}
          alt='Burger Menu'
          className='burger cursor-pointer'
          onClick={handleMenuToggle}
        />
      </nav>
      <nav
        id='mobileNav'
        className='mobileNav bg-neutral-off-white flex flex-col'
        style={{ width: menuWidth }}
      >
        <div className='closeButton flex cursor-pointer flex-row justify-end pr-6 pt-9'>
          <Image
            src={Close}
            width={26}
            alt='Close Menu'
            onClick={handleMenuToggle}
          />
        </div>
        <ul className='navLinks font-regular text-neutral-very-dark-blue space-y-4 pl-8 pt-16 text-2xl'>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
      <div className={`overlay ${menuWidth !== '0px' ? 'active' : ''}`}></div>
    </header>
  );
};

export default Header;
