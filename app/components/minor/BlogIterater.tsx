import Link from 'next/link';

type Blog = {
  title?: string;
  description?: string;
  slug?: string;
  date?: string;
  tags?: string[];
};

export default function BlogIterater({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <section className='max-w-4xl w-full'>
        {blogs.map((blog, index) => (
          <div data-aos='fade-up' data-aos-duration={500 * (index + 1)}>
            <section
              key={index}
              className=' hover-blaze bg-light-secondary dark:bg-neutral1 w-full rounded-sm relative'
            >
              <div className='border-1 border-black/40 w-full'>
                <Link
                  className='ml-4 text-lg font-extrabold text-secondary dark:text-accent hover:text-black'
                  href={`/blog/${blog.slug}`}
                >
                  {blog.title}
                </Link>
                <div className='h4  text-xs  ml-10 p-1 text-right absolute top-1 right-2'>
                  <span className='bg-main text-black dark:text-white dark:font-normal font-extrabold dark:bg-gray-900 py-1 px-3 rounded-sm'>
                    {blog.date}
                  </span>
                </div>
                <div className='border-b-2 w-[50%] border-secondary'></div>
                <div className='max-h-20 ml-4 mt-2 text-sm text-black font-semibold dark: font-normal dark:text-gray-500'>
                  {blog.description}...
                </div>
              </div>
            </section>
          </div>
        ))}
      </section>
    </>
  );
}
