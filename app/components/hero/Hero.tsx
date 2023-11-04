'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '/public/images/hero.svg';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function Hero() {
  return (
    <>
      <motion.section
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
      >
        <div className='flex flex-col-reverse md:flex-row w-96 md:w-full mt-4 '>
          <div className='flex flex-col justify-center items-left'>
            <div>
              <h1 className='ml-14 md:ml-0 text-4xl font-semibold text-lightAccent  dark:text-secondary mt-5 '>
                Micheal Palliparambil
              </h1>
            </div>
            <div className='ml-14 md:ml-0  flex gap-3 text-sm text-lightAccent dark:dark:text-secondary'>
              <h3 className='hidden md:block'>Full Stack Developer -</h3>
              <h3 className=' md:hidden '>Developer -</h3>
              <h3>Designer -</h3>
              <h3>Artist</h3>
            </div>
          </div>
          <div className=' bg-neutral1 rounded-tl-full rounded-tr-full md:rounded-tr-none flex mx-auto border-b-2 border-main md:mt-16'>
            <Image
              alt="Micheal Palliparambil's Picture"
              src={hero}
              width={250}
              height={226}
              priority
            />
          </div>
        </div>
        <div className='max-w-lg md:max-w-2xl h-[50px] mx-2 mt-5 text-center flex justify-center items-center bg-neutral1 text-white dark:text-gray-500 font-extrabold rounded'>
          <div className='hidden md:block'>
            {/* For Tablets and Up -> */}
            <span className='text-sm hover:text-white '>
              Hello, I’m a developer
            </span>
            <span className='hidden md:inline-flex md:flex md:items-center'>
              <span className='text-white dark:text-gray-500 ml-3 text-sm hover:text-white'>
                based in
              </span>
              <span className='text-main mx-1 ml-4 text-1xl hover:text-white'>
                CHICAGO,
              </span>
              <span className='text-accent mx-1 text-1xl hover:text-white'>
                IL.
              </span>
            </span>
            <span className='md:hidden'>
              based in <span className='text-main '>CHICAGO,</span> IL.
            </span>
          </div>

          {/* For Mobile Screens */}
          <div className='block md:hidden text-xs '>
            Hello, I’m a developer based in
            <span className='text-main mx-1 ml-4 text-1xl hover:text-white'>
              CHICAGO,
            </span>
            IL.
          </div>
        </div>
      </motion.section>
    </>
  );
}
