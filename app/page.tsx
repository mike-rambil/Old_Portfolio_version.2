import { Metadata } from 'next';
import StayOnV2 from './components/StayOnV2';
import { NEW_SITE } from './utils/site';

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
  // This site is retired; point search engines at the new one.
  alternates: { canonical: NEW_SITE },

  authors: [{ name: 'Micheal-Palliparambil' }],
  openGraph: {
    title: "Micheal Palliparambil's Portfolio",
    description:
      'Micheal Palliparambil is a software developer based in Chicago, IL. Checkout his Website here!',
    url: 'https://mike-palliparambil.vercel.app',
    siteName: 'Micheal Palliparambil',
    images: [
      {
        url: 'https://mike-palliparambil.vercel.app/mike-rambil-logo.svg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://mike-palliparambil.vercel.app/mike-rambil-logo.svg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className='flex min-h-screen max-w-screen flex-col items-center p-12 bg-light  dark:bg-primary'>
      <StayOnV2 />
    </main>
  );
}
