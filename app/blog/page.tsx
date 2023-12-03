import Link from 'next/link';
import blogs from './blog.json';
export default function Blog() {
  return (
    <section className='flex min-h-screen max-w-full flex-col items-center p-12 bg-light dark:bg-primary'>
      <main
        data-aos='fade-up'
        data-aos-duration='200'
        className='flex flex-col items-center p-12 bg-light dark:bg-primary max-w-4xl w-full'
      >
        <section className='max-w-2xl'>
          <h1 className='text-center text-black dark:text-secondary text-2xl md:text-4xl mb-16 font-bold'>
            Blog
          </h1>
        </section>
        <section className='max-w-4xl w-full'>
          {blogs.map((blog, index) => (
            <section
              data-aos='fade-up'
              data-aos-duration={500 * (index + 1)}
              key={index}
              className=' hover-blaze bg-light-secondary dark:bg-neutral1 w-full rounded-sm'
            >
              <div className='border-1 border-black/40'>
                <Link
                  className='ml-4 text-lg font-extrabold hover:text-secondary '
                  href={`/blog/${blog.slug}`}
                >
                  {blog.title}
                </Link>
                <div className='border-b-2 w-[50%]'></div>
                <div className='max-h-20 ml-4 mt-2 text-sm'>
                  {blog.description}...
                </div>
              </div>
            </section>
          ))}
        </section>
      </main>
    </section>
  );
}
