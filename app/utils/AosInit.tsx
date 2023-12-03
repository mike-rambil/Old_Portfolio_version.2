'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-sine',
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
};
