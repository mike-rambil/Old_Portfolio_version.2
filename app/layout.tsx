'use client';
import { Analytics } from '@vercel/analytics/react';
import { LazyMotion } from 'framer-motion';
import { Fira_Code } from 'next/font/google';
import Main from './components/layouts/Main';
import './globals.css';
import { useDarkMode } from './utils/toggleLightMode/useDarkMode';

// Fonts
const fira_Code = Fira_Code({ subsets: ['latin'] });

// Js Bundle Splitting from initial render off the main thread
const loadFeatures = () =>
  import('./utils/framer-motion').then((res) => res.default);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useDarkMode();

  return (
    //@ts-ignore
    <html lang='en' className={theme}>
      <LazyMotion strict features={loadFeatures}>
        <body className={fira_Code.className}>
          <Main>
            {children}
            <Analytics />
          </Main>
        </body>
      </LazyMotion>
    </html>
  );
}
