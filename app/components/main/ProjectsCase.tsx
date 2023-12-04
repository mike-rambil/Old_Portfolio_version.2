'use client';
import data from '@/app/portfolio/portfolio.json';
import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProjectTitleComponent from '../minor/ProjectTitleComponent';

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
      <div className='flex flex-col items-center justify-center mb-4 max-w-xl w-full'>
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
          {recentWorks.map((project, index) => (
            <m.li
              variants={item}
              className='flex flex-col justify-center  item mb-8'
            >
              <Link
                href={`/portfolio/${project.name}`}
                className='transition-transform duration-200 hover:scale-105'
              >
                {project?.images?.length ? (
                  <div
                    className={
                      'mx-auto h-[150px] w-[300px] md:h-[203px] md:w-[400px] flex'
                    }
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
                ) : (
                  <div
                    className={
                      'mx-auto h-[] w-[300px] md:h-[300px] md:w-[520px] flex justify-evenly '
                    }
                    style={{ position: 'relative' }}
                  >
                    <div className='flex justify-evenly h-[290px] '>
                      <Image
                        className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                        alt={`picture of ${project.name}`}
                        width={160}
                        height={150}
                        // fill
                        src={`/portfolio/images/${project.imagesMobile[0]}`}
                      />
                      <Image
                        className='rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                        alt={`picture of ${project.name}`}
                        width={160}
                        height={150}
                        // fill
                        src={`/portfolio/images/${project.imagesMobile[1]}`}
                      />
                    </div>
                  </div>
                )}
                <ProjectTitleComponent index={index} project={project} />
              </Link>
            </m.li>
          ))}
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
{
  /* <Link
                  href={`/portfolio/${project.name}`}
                  className='transition-transform duration-200 hover:scale-105'
            >*/
}
{
  /* <div
                    className='mx-auto h-[150px] w-[300px] md:h-[203px] md:w-[400px]'
                    style={{ position: 'relative' }}
                  > */
}

{
  /* <Image
                      className=' rounded-lg cursor-pointer shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                      alt={`picture of ${project.name}`}
                      // width={400}
                      // height={150}
                      fill
                      src={`/portfolio/images/${project.images[0]}`}
                    />
                  </div>
                  <ProjectTitleComponent index={index} project={project} />
                </Link>
              </m.li>
            ) : ( */
}
{
  /* <m.li
                variants={item}
                className='flex flex-col justify-center  item mb-8 '
              > */
}
