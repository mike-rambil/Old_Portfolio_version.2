import { Analytics } from '@vercel/analytics/react';
import { LazyMotion } from 'framer-motion';
import { Fira_Code } from 'next/font/google';
import Main from './components/layouts/Main';
import { AOSInit } from './utils/AosInit';

// Fonts
const fira_Code = Fira_Code({ subsets: ['latin'] });

// Js Bundle Splitting from initial render off the main thread
const loadFeatures = () =>
  import('./utils/framer-motion').then((res) => res.default);

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LazyMotion strict features={loadFeatures}>
        <AOSInit />

        <body className={fira_Code.className}>
          <Main>
            {children}
            <Analytics />
          </Main>
        </body>
      </LazyMotion>
    </>
  );
}
