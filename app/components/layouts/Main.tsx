'use client';

import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
