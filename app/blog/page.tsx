'use client';
import Article from '../components/layouts/Article';

export default function Blog() {
  return (
    <section className='flex min-h-screen max-w-full flex-col items-center p-12 bg-light dark:bg-primary'>
      <Article>
        <main className='flex flex-col items-center p-12 bg-light dark:bg-primary'>
          <section className='max-w-2xl'>
            <h1 className='text-center text-black dark:text-secondary text-2xl md:text-4xl mb-16 font-bold'>
              Blog
            </h1>
            <strong className='text-black '>Coming soon!</strong>
          </section>
        </main>
      </Article>
    </section>
  );
}
