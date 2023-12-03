'use client';
import data from '@/app/portfolio/portfolio.json';
import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ProjectsCase() {
  const { portfolio } = data;

  const recentWorks = portfolio.slice(0, 2);

  return (
    <>
      <div className='flex flex-col items-center justify-center mb-4'>
        <div className='portfolio-h2 w-full'>
          <Link href={'/portfolio'}>Recent Projects</Link>
        </div>
        <m.ul
          className='max-w-2xl container'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{
            once: true,
          }}
        >
          {recentWorks.map((project, index) =>
            project?.images?.length ? (
              <m.li
                variants={item}
                className='flex flex-col justify-center  item mb-8'
              >
                <Link
                  href={`/portfolio/${project.name}`}
                  className='transition-transform duration-200 hover:scale-105'
                >
                  <div
                    className='mx-auto h-[150px] w-[300px] md:h-[203px] md:w-[400px]'
                    style={{ position: 'relative' }}
                  >
                    <Image
                      className=' rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                      alt={`picture of ${project.name}`}
                      // width={400}
                      // height={150}
                      fill
                      src={`/portfolio/images/${project.images[0]}`}
                    />
                  </div>
                  <h3
                    key={index}
                    className='bg-[#405a4d] dark:bg-[#34403a]  px-1 py-2 rounded-sm max-w-[400px] mx-auto dark:text-white mt-4 mb-2 text-sm flex'
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
                </Link>
              </m.li>
            ) : (
              <m.li
                variants={item}
                className='flex flex-col justify-center  item mb-8 '
              >
                <Link
                  href={`/portfolio/${project.name}`}
                  className='transition-transform duration-200 hover:scale-105'
                >
                  <div className='flex justify-evenly'>
                    <Image
                      className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                      alt={`picture of ${project.name}`}
                      width={150}
                      height={150}
                      // fill
                      src={`/portfolio/images/${project.imagesMobile[0]}`}
                    />
                    <Image
                      className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                      alt={`picture of ${project.name}`}
                      width={150}
                      height={150}
                      // fill
                      src={`/portfolio/images/${project.imagesMobile[1]}`}
                    />
                  </div>
                  <h3
                    key={index}
                    className='bg-[#405a4d] dark:bg-[#34403a]  px-1 py-2 rounded-sm max-w-[400px] mx-auto dark:text-white mt-4 mb-2 text-sm flex'
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
                </Link>
              </m.li>
            )
          )}
        </m.ul>
      </div>
      <div className='flex justify-center'>
        <Link href='/portfolio' className='button'>
          View More &gt;
        </Link>
      </div>
    </>
  );
}
