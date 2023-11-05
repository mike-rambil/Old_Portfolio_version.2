'use client';
import Article from '@/app/components/layouts/Article';
import Image from 'next/image';
import Link from 'next/link';
import data from '../portfolio.json';

//function to query the param requested portfolio
const getPost = (params: string) => {
  const { portfolio } = data;
  return portfolio.find((_, index) => index == Number(params));
};

export default function Page({ params }: { params: { id: string } }) {
  const current = getPost(params.id);

  return (
    <>
      <Article>
        {/* <head>
          <title>{current?.name}</title>
          <meta name='description' content={current?.short_description} />
        </head> */}
        <article className='flex min-h-screen max-w-full flex-col  items-center p-12 bg-light  dark:bg-primary'>
          <div className='flex flex-col items-center mt-14 bg-lighdark:bg-primary '>
            <div className='max-w-2xl  '>
              <h1 className='text-center text-black dark:text-secondary text-2xl md:text-4xl mb-16 md:mt-[8rem] font-bold '>
                {current?.name}
              </h1>
              <div className='w-full transition-transform duration-200 hover:scale-95 '>
                <Link className='button ' href='/portfolio'>
                  &lt; Go Back
                </Link>
              </div>
              <p className='my-16 text-sm text-black dark:text-white mt-20 indent-20 '>
                {current?.short_description}
              </p>

              <section className='w-full '>
                <div className='flex flex-col items-left md:ml-10'>
                  {current?.links.front_end && (
                    <div className='text-xs my-1'>
                      <span className='mr-1 bg-[#405a4d] dark:bg-[#34403a] text-[#72a584] px-1 rounded-sm'>
                        WEBSITE:
                      </span>
                      <a
                        className='text-pink-600 dark:text-accent hover:underline'
                        href={current?.links.front_end}
                        target='_blank'
                      >
                        {current?.links.front_end}
                        {/* @ts-ignore */}
                        <box-icon name='link-external' size='xs' color='purple'>
                          {/* @ts-ignore */}
                        </box-icon>
                      </a>
                    </div>
                  )}
                  {current?.links.back_end && (
                    <div className='text-xs my-1'>
                      <span className='mr-1 bg-[#405a4d] dark:bg-[#34403a] text-[#72a584] px-1 rounded-sm'>
                        BACKEND:
                      </span>

                      <a
                        className='text-pink-600 dark:text-accent hover:underline'
                        href={current?.links.back_end}
                        target='_blank'
                      >
                        {current?.links.back_end}
                        {/* @ts-ignore */}
                        <box-icon name='link-external' size='xs' color='purple'>
                          {/* @ts-ignore */}
                        </box-icon>
                      </a>
                    </div>
                  )}
                  {current?.links.github && (
                    <div className='text-xs my-1'>
                      <span className='mr-1 bg-[#405a4d] dark:bg-[#34403a] text-[#72a584] px-1 rounded-sm'>
                        GITHUB:
                      </span>
                      <a
                        className='text-pink-600 dark:text-accent hover:underline'
                        href={current?.links.github}
                        target='_blank'
                      >
                        {current?.links.github}
                        {/* @ts-ignore */}
                        <box-icon name='link-external' size='xs' color='purple'>
                          {/* @ts-ignore */}
                        </box-icon>
                      </a>
                    </div>
                  )}
                  <div className='text-xs mt-4'>
                    <span className='mr-1 bg-[#405a4d] dark:bg-[#34403a] text-[#72a584] px-1 rounded-sm'>
                      STACK:
                    </span>
                    <a
                      className='text-pink-600 dark:text-accent '
                      href={current?.links.github}
                    >
                      {current?.stack}
                      {/* @ts-ignore */}
                      <box-icon name='coin-stack' size='xs' color='purple'>
                        {/* @ts-ignore */}
                      </box-icon>
                    </a>
                  </div>
                  <div className='text-xs my-1'>
                    <span className='mr-1 bg-[#405a4d] dark:bg-[#34403a] text-[#72a584] px-1 rounded-sm'>
                      FEATURES:
                    </span>
                    <a
                      className='text-pink-600 dark:text-accent '
                      href={current?.features}
                    >
                      {current?.stack}
                      {/* @ts-ignore */}
                      <box-icon name='coin-stack' size='xs' color='purple'>
                        {/* @ts-ignore */}
                      </box-icon>
                    </a>
                  </div>
                </div>
              </section>
              <section className='mt-16'>
                <div className='flex items-center flex-col '>
                  {current?.images.map((links, index) => (
                    <Image
                      key={index}
                      className='rounded-lg my-5 shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                      alt={current.name + index}
                      src={`/portfolio/images/${links}`}
                      height={300}
                      width={600}
                      quality={100}
                    />
                  ))}
                </div>
                <div className='flex justify-center flex-wrap'>
                  {current?.imagesMobile.map((links, index) => (
                    <Image
                      key={index}
                      className='rounded-lg my-5 inline-block mx-5 shadow-2xl shadow-gray-950 hover:shadow-cyan-500/40'
                      alt={current.name + index}
                      src={`/portfolio/images/${links}`}
                      height={300}
                      width={200}
                      quality={100}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </Article>
    </>
  );
}
