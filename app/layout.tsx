'use client';
import 'boxicons';
import { Fira_Code } from 'next/font/google';
import Main from './components/layouts/Main';
import './globals.css';
import { useDarkMode } from './utils/toggleLightMode/useDarkMode';

// Fonts
const fira_Code = Fira_Code({ subsets: ['latin'] });

// Meta-DATA
// export const metadata: Metadata = {
//   title: 'Micheal Palliparambil - Homepage',
//   description:
//     'Micheal Palliparambil is a software developer based in Chicago, IL. Checkout his PortFolio here! ',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useDarkMode();

  return (
    // Todo: Implement Light and Dark Mode
    <html lang='en' className={theme}>
      <body className={fira_Code.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
