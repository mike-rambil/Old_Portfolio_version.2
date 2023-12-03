import Link from 'next/link';
import blogs from '../../blog/blog.json';
import BlogIterater from '../minor/BlogIterater';
export default function BlogVertisement() {
  const blog = blogs.slice(0, 1);
  return (
    <>
      <section className='max-w-xl w-full mt-12'>
        <div className='flex flex-col items-center justify-center mb-4 max-w-xl w-full'>
          <div className='portfolio-h2 w-full'>
            <Link href={'/blog'}>Check out my blogs here...</Link>
          </div>
          <BlogIterater blogs={blog} />
        </div>
      </section>
    </>
  );
}
