'use client';
import { motion, Variants } from 'framer-motion';
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
      <main className='flex flex-col items-center p-12 bg-lighdark:bg-primary'>
        <section className='max-w-2xl'>
          <h1 className='text-center text-black dark:text-secondary text-2xl md:text-4xl mb-16 font-bold'>
            Portfolio
          </h1>
          <motion.ul
            className='max-w-2xl container'
            variants={container}
            initial='hidden'
            animate='visible'
          >
            {portfolio.map((project, index) => (
              <motion.li
                variants={item}
                className='flex flex-col justify-center items-center item '
              >
                <Link
                  href='/'
                  className='transition-transform duration-200 hover:scale-105'
                >
                  <Image
                    className='rounded-lg cursor-pointer'
                    alt={project.short_description}
                    width={400}
                    height={150}
                    src={`/portfolio/images/${project.images[0]}`}
                  />
                  <p
                    key={index}
                    className='text-black dark:text-white my-8 max-w-xs text-xs'
                  >
                    {project?.short_description}
                  </p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </main>
    </Article>
  );
}
