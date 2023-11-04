'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Article from '../components/layouts/Article';
import data from './portfolio.json';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function PortfolioContent() {
  const { portfolio } = data;

  return (
    <main className='flex flex-col items-center p-12 bg-lighdark:bg-primary'>
      <section className='max-w-2xl'>
        <h1 className='text-center text-2xl md:text-4xl mb-16 font-bold'>
          Portfolio
        </h1>
        <motion.ul
          className='max-w-2xl'
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
        >
          {portfolio.map((project, index) => (
            <motion.li
              variants={itemVariants}
              className='flex flex-col justify-center items-center hover:scale-2'
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
                <p key={index} className='my-8 max-w-xs text-xs'>
                  {project?.short_description}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </main>
  );
}
