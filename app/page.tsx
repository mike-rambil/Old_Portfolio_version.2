import { Metadata } from 'next';
import BioSocials from './components/experience/BioSocials';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';

// TODO: OpenGraph Protocol and Icons- https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
// TODO: robots.txt
// TODO: Sitemap
// TODO: Canonical
export const metadata: Metadata = {
  title: 'Homepage | Micheal Palliparambil',
  description:
    'Micheal Palliparambil is a software developer based in Chicago, IL. Checkout his Website here! ',
  keywords: [
    'Micheal',
    'Palliparambil',
    'Mike',
    'Rambil',
    'Portfolio',
    'Mike-Rambil',
    'Micheal Palliparambil',
  ],
  creator: 'Mike Rambil',
  publisher: 'Micheal Palliparambil',

  authors: [{ name: 'Micheal-Palliparambil' }],
  openGraph: {
    title: "Micheal Palliparambil's Portfolio",
    description:
      'Micheal Palliparambil is a software developer based in Chicago, IL. Checkout his Website here!',
    // url: 'https://nextjs.org',
    siteName: 'Micheal Palliparambil',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className='flex min-h-screen max-w-full flex-col items-center p-12 bg-light  dark:bg-primary'>
      <Hero />
      <Experience />
      <BioSocials />
    </main>
  );
}
