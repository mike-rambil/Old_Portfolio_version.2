'use client';

// import 'boxicons';
import { Fira_Code } from 'next/font/google';
import Main from './components/layouts/Main';
import './globals.css';
import { useDarkMode } from './utils/toggleLightMode/useDarkMode';

// Fonts
const fira_Code = Fira_Code({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useDarkMode();

  return (
    //@ts-ignore
    <html lang='en' className={theme}>
      <body className={fira_Code.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
