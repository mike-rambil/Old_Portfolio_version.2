import dynamic from 'next/dynamic';
import Script from 'next/script';
const FooterComp = dynamic(() => import('./footer-components/FooterComp'));

export default function Footer() {
  return (
    <footer className='max-w-screen bg-[#e6c083] dark:bg-neutral1  flex flex-col items-center justify-center py-8'>
      <FooterComp />
      <Script src='https://unpkg.com/boxicons@2.1.4/dist/boxicons.js' defer />
    </footer>
  );
}
