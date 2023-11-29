'use client';
import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Article from '../components/layouts/Article';
import data from './portfolio.json';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function PortfolioContent() {
  const { portfolio } = data;

  return (
    <Article>
      <main className='flex flex-col items-center p-12 '>
        <section className='max-w-2xl'>
          <h1 className='text-center text-black dark:text-secondary text-2xl md:text-4xl mb-16 font-bold '>
            Portfolio
          </h1>
          <m.ul
            className='max-w-2xl container'
            variants={container}
            initial='hidden'
            animate='visible'
          >
            {portfolio.map((project, index) =>
              project?.images?.length ? (
                <m.li
                  variants={item}
                  className='flex flex-col justify-center  item '
                >
                  <Link
                    href={`/portfolio/${project.name}`}
                    className='transition-transform duration-200 hover:scale-105'
                  >
                    <div
                      className='h-[150px] w-[300px] md:h-[203px] md:w-[400px]'
                      style={{ position: 'relative' }}
                    >
                      <Image
                        className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                        alt={`picture of ${project.name}`}
                        // width={400}
                        // height={150}
                        fill
                        src={`/portfolio/images/${project.images[0]}`}
                      />
                    </div>
                    <h3
                      key={index}
                      className='bg-[#405a4d] dark:bg-[#34403a]  px-1 py-2 rounded-sm  dark:text-white mt-4 mb-2 text-sm flex'
                    >
                      <div className=' mx-auto text-teal-400 font-extrabold'>
                        {project?.name}
                      </div>
                      <div>
                        <div className=' bg-neutral dark:bg-main  px-1 rounded-full text-teal-500 dark:text-black font-bold  text-[10px]'>
                          {project?.platform}
                        </div>
                      </div>
                    </h3>
                    <p
                      key={index}
                      className='text-black dark:text-gray-400 mb-8 max-w-xs text-[12px]'
                    >
                      {project?.short_description}
                    </p>
                  </Link>
                </m.li>
              ) : (
                <m.li
                  variants={item}
                  className='flex flex-col justify-center  item '
                >
                  <Link
                    href={`/portfolio/${project.name}`}
                    className='transition-transform duration-200 hover:scale-105'
                  >
                    <div
                      // className='h-[250px] w-[170px] md:h-[303px] md:w-[200px]'
                      className='flex justify-evenly'
                      // style={{ position: 'relative' }}
                    >
                      {/* <div> */}
                      <Image
                        className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                        alt={`picture of ${project.name}`}
                        width={150}
                        height={150}
                        // fill
                        src={`/portfolio/images/${project.imagesMobile[0]}`}
                      />
                      {/* </div> */}
                      {/* <div> */}
                      <Image
                        className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                        alt={`picture of ${project.name}`}
                        width={150}
                        height={150}
                        // fill
                        src={`/portfolio/images/${project.imagesMobile[1]}`}
                      />
                      {/* </div> */}
                    </div>
                    <h3
                      key={index}
                      className='bg-[#405a4d] dark:bg-[#34403a]  px-1 py-2 rounded-sm  dark:text-white mt-4 mb-2 text-sm flex'
                    >
                      <div className=' mx-auto text-teal-400 font-extrabold'>
                        {project?.name}
                      </div>
                      <div>
                        <div className='bg-blue-700 text-blue-300 px-1 rounded-full font-bold  text-[10px]'>
                          {project?.platform}
                        </div>
                      </div>
                    </h3>
                    <p
                      key={index}
                      className='text-black dark:text-gray-400 mb-8 max-w-xs text-[12px]'
                    >
                      {project?.short_description}
                    </p>
                  </Link>
                </m.li>
              )
            )}
          </m.ul>
        </section>
      </main>
    </Article>
  );
}
