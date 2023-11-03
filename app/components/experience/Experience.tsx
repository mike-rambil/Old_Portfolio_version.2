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
        <article>
          <section className='max-w-xl'>
            <h2 className='portfolio-h2'>Work</h2>
            <p className='portfolio-paragraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto aspernatur aperiam sit nesciunt reiciendis molestiae?
              Reprehenderit repudiandae, perspiciatis velit beatae dolorum minus
              a voluptatem ipsam aut sequi nesciunt? Minima, amet? Vitae
              suscipit dolorum quas temporibus odit velit, excepturi labore nemo
              nam et ut, assumenda harum. Et harum mollitia sit impedit velit.
              Ullam illum earum, voluptatem debitis at quae nemo modi! Illum
              corrupti voluptatibus architecto fugiat ipsum esse rem accusamus
              dolor, cum optio laborum, odit totam corporis assumenda veniam
              laudantium commodi cumque inventore nesciunt ea pariatur!
              officiis.
            </p>
            <div className='flex justify-center items-center mt-4'>
              <Link href='/portfolio' className='button'>
                My PortFolio &gt;
              </Link>
            </div>

            <div className='scroller' data-direction='right' data-speed='slow'>
              <div className='scroller__inner'>
                <Image src='/images/clang.svg' width='50' height={50} alt='' />
                <Image src='/images/java.svg' width='50' height={50} alt='' />
                <Image src='/images/js.svg' width='50' height={50} alt='' />
                <Image
                  src='/images/mongodb.svg'
                  width='50'
                  height={50}
                  alt=''
                />
                <Image src='/images/nextjs.svg' width='50' height={50} alt='' />
                <Image src='/images/tekton.svg' width='50' height={50} alt='' />
                <Image src='/images/ts.svg' width='50' height={50} alt='' />
                <Image
                  src='/images/postgre.svg'
                  width='50'
                  height={50}
                  alt=''
                />
                <Image src='/images/nextjs.svg' width='50' height={50} alt='' />
                <Image
                  src='/images/reactjs.svg'
                  width='50'
                  height={50}
                  alt=''
                />
              </div>
            </div>
          </section>
        </article>
      </Article>
    </>
  );
}
