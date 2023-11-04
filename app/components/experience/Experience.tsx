'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Article from '../layouts/Article';
import './experience.css';

export default function Experience() {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        //@ts-ignore
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        //@ts-ignore
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          //@ts-ignore
          duplicatedItem?.setAttribute('aria-hidden', true);
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <Article>
        <article className='mb-16'>
          <section
            className='max-[320px]:w-[275px] md:max-w-xl'
            // style={{ position: 'relative', overflowX: 'hidden' }}
            style={{ overflowX: 'hidden' }}
          >
            <p className='portfolio-paragraph max-w-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto aspeniam laudantium commodi cumque inventore nesciunt
              ea pariatur! officiis.
            </p>
            <div className='flex justify-center items-center mt-4 md:mt-10'>
              <Link href='/portfolio' className='button'>
                My PortFolio &gt;
              </Link>
            </div>

            <div
              className='scroller mt-2 md:mt-10'
              style={{
                // position: 'absolute',
                overflow: 'hidden',
              }}
              data-direction='right'
              data-speed='slow'
            >
              <div className='scroller__inner'>
                <Image
                  src='/images/clang.svg'
                  width='50'
                  height={50}
                  alt='clang-icon'
                />
                <Image
                  src='/images/java.svg'
                  width='50'
                  height={50}
                  alt='java-icon'
                />
                <Image
                  src='/images/js.svg'
                  width='50'
                  height={50}
                  alt='js-icon'
                />
                <Image
                  src='/images/mongodb.svg'
                  width='50'
                  height={50}
                  alt='mongodb-icon'
                />

                <Image
                  src='/images/tekton.svg'
                  width='50'
                  height={50}
                  alt='tekton-icon'
                />

                <Image
                  src='/images/ts.svg'
                  width='50'
                  height={50}
                  alt='ts-icon'
                />
                <Image
                  src='/images/nextjs.svg'
                  width='50'
                  height={50}
                  alt='nextjs-icon'
                />
                <Image
                  src='/images/reactjs.svg'
                  width='50'
                  height={50}
                  alt='reactjs-icon'
                />
                <Image
                  src='/images/postgre.svg'
                  width='50'
                  height={50}
                  alt='postgre-icon'
                />
              </div>
            </div>
          </section>
        </article>
      </Article>
    </>
  );
}
