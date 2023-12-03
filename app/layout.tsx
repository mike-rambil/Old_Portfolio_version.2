'use client';

import './globals.css';
import Home from './Home';
import { useDarkMode } from './utils/toggleLightMode/useDarkMode';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useDarkMode();

  return (
    //@ts-ignore
    <html lang='en' className={theme}>
      <Home>{children}</Home>
    </html>
  );
}
