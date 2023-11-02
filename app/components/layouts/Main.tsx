import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        {/* <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
        <meta name='author' content='Micheal Palliparambil' />
        <meta name='author' content='Mike Rambil' />
        <link rel='micheal-palliparambil-icon' href='/icon.png' />
        <meta
          name='twitter:title'
          content="Micheal Palliparambil's Portfolio"
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@Mykl_007' />
        <meta name='twitter:creator' content='@Mykl_007' />
        <meta name='twitter:image' content='' /> //TODO- Insert Website URL
        <meta property='og:site_name' content='Micheal Palliparambil' />
        <meta name='og:title' content='Micheal Palliparambil' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' /> //TODO : Need To insert image
        <title>Micheal Palliparambil - Homepage</title>
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
