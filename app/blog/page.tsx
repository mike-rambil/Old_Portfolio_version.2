import BlogIterater from '../components/minor/BlogIterater';
import blogs from './blog.json';
export default function Blog() {
  return (
    <section className='flex min-h-screen max-w-full flex-col items-center p-12 pt-24 bg-light dark:bg-primary'>
      <main
        data-aos='fade-up'
        data-aos-duration='200'
        className='flex flex-col items-center md:p-12 bg-light dark:bg-primary max-w-4xl w-full'
      >
        <section className='max-w-2xl'>
          <h1 className='text-center text-black dark:text-secondary text-2xl md:text-4xl mb-16 font-bold'>
            Blog
          </h1>
        </section>
        <BlogIterater blogs={blogs} />
      </main>
    </section>
  );
}
