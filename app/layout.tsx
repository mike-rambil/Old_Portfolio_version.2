import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Main from './components/layouts/Main';
import './globals.css';

const fira_Code = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Micheal Palliparambil - Homepage',
  description:
    'Micheal Palliparambil is a software developer based in Chicago, IL. Checkout his PortFolio here! ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={fira_Code.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
