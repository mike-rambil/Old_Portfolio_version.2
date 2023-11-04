'use client';

import Link from 'next/link';
import Article from './components/layouts/Article';

export default function Error() {
  return (
    <Article>
      <section className='flex min-h-screen max-w-full flex-col justify-center items-center p-12 bg-light  dark:bg-primary'>
        <h2 className='portfolio-h2'>Something went Wrong!</h2>
        <p className='my-16 text-sm'>You may return back to home screen!</p>
        <Link className='button' href='/'>
          Return Home
        </Link>
      </section>
    </Article>
  );
}
