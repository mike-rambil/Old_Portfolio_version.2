import Image from 'next/image';
import hero from '/public/images/hero.svg';

export default function Hero() {
  return (
    <>
      <section className='max-[320px]:w-[275px]'>
        <div className='max-[320px]:w-[275px] flex flex-col-reverse md:flex-row  md:w-full mt-4 '>
          <div className='flex flex-col justify-center items-left'>
            <div>
              <h1 className='max-[320px]:text-sm px-11 md:ml-0 text-4xl font-semibold text-black  dark:text-secondary mt-5 '>
                Micheal Palliparambil
              </h1>
            </div>
            <div className=' flex justify-center gap-3 text-sm text-black dark:dark:text-secondary'>
              <h2 className='hidden md:block '>Full Stack Developer -</h2>
              <h2 className=' md:hidden '>Developer -</h2>
              <h2>Designer -</h2>
              <h2>Artist</h2>
            </div>
          </div>
          <div className='bg-light-secondary w-[250px] h-[226] dark:bg-neutral1 rounded-tl-full rounded-tr-full md:rounded-tr-none flex mx-auto border-b-2 border-main md:mt-16'>
            <Image
              alt="Micheal Palliparambil's Picture"
              src={hero}
              width={250}
              height={226}
              priority
            />
          </div>
        </div>
        <div className='max-[320px]:w-[273px] max-w-lg md:max-w-2xl h-[50px] mx-auto mt-5 text-center flex justify-center items-center bg-light-secondary dark:bg-neutral1 text-white dark:text-gray-500 font-extrabold rounded '>
          <div className='hidden md:block'>
            {/* For Tablets and Up -> */}
            <span className='text-sm text-black dark:text-gray-500'>
              Hello, I’m a developer
            </span>
            <span className='hidden md:inline-flex md:items-center'>
              <span className='text-black dark:text-gray-500 ml-3 text-sm hover:text-white'>
                based in
              </span>
              <span className='text-black dark:text-main mx-1 ml-4 text-1xl hover:text-white'>
                CHICAGO,
              </span>
              <span className='dark:text-accent mx-1 text-1xl hover:text-white'>
                IL.
              </span>
            </span>
            <span className='md:hidden'>
              based in <span className='text-main '>CHICAGO,</span> IL.
            </span>
          </div>

          {/* For Mobile Screens */}
          <div className='block md:hidden text-xs text-light-secondary-900 dark:text-white'>
            Hello, I’m a developer based in
            <span className='dark:text-main mx-1 ml-3 text-1xl hover:text-white text-light-accent'>
              CHICAGO,
            </span>
            IL.
          </div>
        </div>
      </section>
    </>
  );
}
