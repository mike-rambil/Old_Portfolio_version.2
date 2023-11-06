'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../utils/toggleLightMode/useDarkMode';
import Socials from './Socials';
import './navbar.css';
import Logo from '/public/mike-rambil-logo.svg';
export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    if (theme == 'dark') setIsDark(true);
  }, []);

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
    <header className='fixed w-screen top-0 h-14 flex backdrop-blur-[3px] z-50'>
      <section className=' h-full max-w-4xl w-full   mx-auto flex justify-between items-center'>
        {/*   LEFT SIDE Logo */}
        <div className='ml-3 md:mr-0 transition-transform duration-200 hover:scale-125'>
          <Link href={'/'}>
            <Image
              alt='Micheal Palliparambil Logo'
              src={Logo}
              width={36}
              height={35}
              priority
            />
          </Link>
        </div>

        {/* Right Side */}
        <div className='flex'>
          <div className='flex mr-4 '>
            <button onClick={handleDarkClick}>
              {isDark ? (
                // @ts-ignore
                <box-icon
                  type='solid'
                  name='sun'
                  animation='tada-hover'
                  border='square'
                  size='md'
                  color='orange'
                  //@ts-ignore
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
                  //@ts-ignore
                ></box-icon>
              )}
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <div className='mr-5 md:mr-4'>
              <button onClick={handleClick}>
                {' '}
                <div id='menu' className='menu '>
                  <div className='toggler cross-nav '></div>
                  <div className='toggler cross-nav '></div>
                  <div className='toggler cross-nav '></div>
                </div>
              </button>
            </div>
            {/* For Mobile Device --Animated Transition */}
            <div
              id='navbar'
              className='navbar bg-light-secondary-900 dark:bg-[#1c2c49] '
            >
              <nav className='w-full text-right'>
                <div className='flex flex-col justify-between h-full'>
                  <div>
                    <ul>
                      <li className='  cursor-pointer  font-semibold mb-5 '>
                        <Link onClick={handleClick} href={'/portfolio'}>
                          <div className=''>
                            <div className='text-secondary dark:text-white text-sm hover:text-black  hover:underline  '>
                              Portfolio
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className='cursor-pointer  font-semibold   '>
                        <Link
                          onClick={handleClick}
                          href={'/blog'}
                          className=' '
                        >
                          <div className=''>
                            <div className=' text-secondary dark:text-white text-sm hover:text-black hover:underline'>
                              Blog
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='flex justify-center  gap-2'>
                    <Socials />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
