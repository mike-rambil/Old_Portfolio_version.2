import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Micheal Palliparambil',
  description:
    'Micheal Palliparambil blogs once in a while. Checkout his Website here! ',
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
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
