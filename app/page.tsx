import { Metadata } from 'next';
import Hero from './components/hero/Hero';

// Todo: OpenGraph Protocol and Icons- https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
// Todo: robots.txt
// Todo: Sitemap
export const metadata: Metadata = {
  title: 'Micheal Palliparambil - Homepage',
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
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-light  dark:bg-primary'>
      <Hero />
    </main>
  );
}
