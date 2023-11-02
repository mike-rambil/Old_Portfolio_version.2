'use client';
import Image from 'next/image';
import Link from 'next/link';
import { relative } from 'path';
import { useState } from 'react';
import { useDarkMode } from '../utils/toggleLightMode/useDarkMode';
import './navbar.css';
import Logo from '/public/mike-rambil-logo.svg';
export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const { theme, toggleTheme } = useDarkMode();

  function handleDarkClick() {
    setIsDark((prevState) => !prevState);
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    toggleTheme();
  }

  const handleClick = () => {
    var togglers = document.querySelectorAll('.toggler');
    var navbar = document.getElementById('navbar');

    function tranformFormat() {
      togglers[0].classList.toggle('animation0');
      togglers[1].classList.toggle('hide');
      togglers[2].classList.toggle('animation2');
      navbar?.classList.toggle('show');
    }
    tranformFormat();
  };

  return (
    <header className='fixed w-screen top-0 h-14 flex bg-transparent '>
      <section className=' h-full max-w-4xl w-full   mx-auto flex justify-between items-center'>
        {/*   LEFT SIDE Logo */}
        <div className='ml-3 md:mr-0'>
          <Image alt='Micheal Palliparambil Logo' src={Logo} />
        </div>

        {/* Right Side */}
        <div className='flex'>
          <div className='flex mr-4'>
            <button onClick={handleDarkClick}>
              {isDark ? (
                //@ts-ignore
                <box-icon
                  type='solid'
                  name='sun'
                  animation='tada-hover'
                  border='square'
                  size='md'
                  color='yellow'
                ></box-icon>
              ) : (
                //@ts-ignore
                <box-icon
                  type='solid'
                  name='moon'
                  animation='tada-hover'
                  border='square'
                  size='md'
                  color='black'
                ></box-icon>
              )}
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <div className='mr-5 md:mr-4'>
              <button onClick={handleClick}>
                {' '}
                <nav id='menu' className='menu '>
                  <div className='toggler button'></div>
                  <div className='toggler button'></div>
                  <div className='toggler button'></div>
                </nav>
              </button>
            </div>
            {/* For Mobile Device --Animated Transition */}
            <div id='navbar' className='navbar '>
              <ul>
                <li className=' md:block cursor-pointer text-white hover:text-accent mb-5'>
                  <a href={'/portfolio'}>
                    <div className='flex  justify-center'>
                      <div className='text-white'>Portfolio</div>
                    </div>
                  </a>
                </li>
                <li className='cursor-pointer  font-semibold hover:text-accent  '>
                  <Link href={'/'} className=' '>
                    <div className='flex  justify-center'>
                      <div className='w-16'>Blog</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
