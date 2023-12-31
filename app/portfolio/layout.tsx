import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Micheal Palliparambil',
  description:
    'Micheal Palliparambil is a software developer based in Chicago, IL. Checkout his PortFolio here! ',
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
      'Micheal Palliparambil is a software developer based in Chicago, IL. Checkout his PortFolio here!',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
