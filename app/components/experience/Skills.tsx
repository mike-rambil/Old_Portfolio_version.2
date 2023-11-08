'use client';
import data from '@/app/portfolio/portfolio.json';
import { motion } from 'framer-motion';
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
export default function Skills() {
  const { portfolio } = data;
  const recentWorks = portfolio.slice(0, 2);

  return (
    <>
      <section>
        <h2 className='portfolio-h2 mb-16'>Skills</h2>
        <div className='flex items-center justify-center w-full mb-4 '>
          <div className='w-1/2'>
            <h3 className='portfolio-h3 '>Languages</h3>
          </div>
          <div className='skills-box'>
            <ul className='portfolio-ul '>
              <li className='portfolio-li'>JavaScript</li>
              <li className='portfolio-li'>TypeScript</li>
              <li className='portfolio-li'>C/C+</li>
              <li className='portfolio-li'>Java</li>
              <li className='portfolio-li'>Python</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-1/2 '>
            <h3 className='portfolio-h3 '>Frameworks</h3>
          </div>
          <div className='skills-box'>
            <ul className='portfolio-ul'>
              <li className='portfolio-li'>Next.js</li>
              <li className='portfolio-li'>React.js</li>
              <li className='portfolio-li'>Material UI</li>
              <li className='portfolio-li'>Express.j</li>
              <li className='portfolio-li'>Node.js</li>
              <li className='portfolio-li'>Bootstrap</li>
              <li className='portfolio-li'>Pug.js</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-1/2 '>
            <h3 className='portfolio-h3 '>Database</h3>
          </div>

          <div className='skills-box'>
            <ul className='portfolio-ul'>
              <li className='portfolio-li'>PostgreSQL</li>
              <li className='portfolio-li'>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-1/2'>
            <h3 className='portfolio-h3 '>ORMs</h3>
          </div>

          <div className='skills-box'>
            <ul className='portfolio-ul'>
              <li className='portfolio-li'>Prisma</li>
              <li className='portfolio-li'>Knex.js</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-1/2'>
            <h3 className='portfolio-h3 '>DevOps</h3>
          </div>
          <div className='skills-box'>
            <ul className='portfolio-ul '>
              <li className='portfolio-li'>Scrum & Agile</li>
              <li className='portfolio-li'>Tekton</li>
              <li className='portfolio-li'>Docker</li>
              <li className='portfolio-li'>Kubernetes</li>
              <li className='portfolio-li'>Github Actions</li>
              <li className='portfolio-li'>AWS</li>
              <li className='portfolio-li'>OpenShift</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mb-4'>
          <div className='portfolio-h2'>Recent Works</div>
          <motion.ul
            className='max-w-2xl container'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: true,
            }}
          >
            {recentWorks.map((project, index) => (
              <motion.li
                variants={item}
                className='flex flex-col justify-center items-center item '
              >
                <Link
                  href={`/portfolio/${index}`}
                  className='transition-transform duration-200 hover:scale-105'
                >
                  <div
                    className='h-[150px] w-[300px] md:h-[203px] md:w-[400px]'
                    style={{ position: 'relative' }}
                  >
                    <Image
                      className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                      alt={project.short_description}
                      // width={400}
                      // height={150}
                      fill
                      src={`/portfolio/images/${project.images[0]}`}
                    />
                  </div>

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
        </div>
        <div className='flex justify-center'>
          <Link href='/portfolio' className='button'>
            View More &gt;
          </Link>
        </div>
      </section>
    </>
  );
}
