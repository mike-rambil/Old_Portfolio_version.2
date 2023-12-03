import Link from 'next/link';
import blogs from './blog.json';
export default function Blog() {
  return (
    <section
      data-aos='fade-up'
      data-aos-duration='200'
      className='flex min-h-screen max-w-full flex-col items-center p-12 bg-light dark:bg-primary'
    >
      <main className='flex flex-col items-center p-12 bg-light dark:bg-primary max-w-4xl w-full'>
        <section className='max-w-2xl'>
          <h1 className='text-center text-black dark:text-secondary text-2xl md:text-4xl mb-16 font-bold'>
            Blog
          </h1>
        </section>
        <section className='max-w-4xl w-full'>
          {blogs.map((blog, index) => (
            <section className='dark:bg-black w-full'>
              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            </section>
          ))}
        </section>
      </main>
    </section>
  );
}
