'use client';

import Link from 'next/link';
import Article from './components/layouts/Article';

export default function NotFound() {
  return (
    <Article>
      <section className='flex min-h-screen max-w-full flex-col justify-center items-center p-12 bg-light  dark:bg-primary'>
        <h2 className='portfolio-h2'>Page not Found</h2>
        <p className='my-16 text-sm'>Could not find requested resource</p>
        <Link className='button' href='/'>
          Return Home
        </Link>
      </section>
    </Article>
  );
}
