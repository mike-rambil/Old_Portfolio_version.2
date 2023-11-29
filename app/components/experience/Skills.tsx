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
              <li className='portfolio-li'>OpenShift</li>
              <li className='portfolio-li'>Github Actions</li>
              <li className='portfolio-li'>AWS</li>
              <li className='portfolio-li'>TDD</li>
              <li className='portfolio-li'>Jest</li>
              <li className='portfolio-li'>Chai | Mocha</li>
              <li className='portfolio-li'>Puppeteer</li>
            </ul>
          </div>
        </div>
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
      </section>
    </>
  );
}
