import Image from 'next/image';
import Logo from '../assets/images/logo.svg';
export default function Header() {
  return (
    <header className='container mx-auto flex flex-row justify-between px-8'>
      <div>
        <Image src={Logo} width={48} height={48} alt='Logo' />
      </div>
      <nav className='flex items-center'>
        <ul className='flex flex-row items-center space-x-8'>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}
