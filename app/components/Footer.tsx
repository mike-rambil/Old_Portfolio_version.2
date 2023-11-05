'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => {
      if (prev == true) {
        setTimeout(() => {
          // set timeout to reestablish the truthy after returning false.
          setIsVisible(true);
        }, 0);
        return false;
      }

      return true;
    });
  };

  useEffect(() => {
    //@ts-ignore
    window.formbutton =
      //@ts-ignore
      window.formbutton ||
      function () {
        //@ts-ignore
        (formbutton.q = formbutton.q || []).push(arguments);
      };
    //@ts-ignore
    formbutton('create', {
      action: 'https://formspree.io/mqkvjazb',
      title: 'How can I help?',
      fields: [
        {
          type: 'email',
          label: 'Email:',
          name: 'email',
          required: true,
          placeholder: 'your@email.com',
        },
        {
          type: 'number',
          label: 'Phone:',
          name: 'phone',
          placeholder: '9999999999',
        },
        {
          type: 'textarea',
          label: 'Message:',
          name: 'message',
          placeholder: "What's on your mind?",
        },

        { type: 'submit' },
      ],
      styles: {
        fontFamily: '"Fira Code", sans-serif',
        title: {
          backgroundColor: '#1c2c49',
        },
        button: {
          backgroundColor: '#1c2c49',
        },
      },
      initiallyVisible: isVisible,
    });
  }, [isVisible]);

  //To make the form appear after the specified timeout
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10000);
  }, []);

  return (
    <footer className='max-w-screen bg-primary text-slate-600 flex flex-col justify-center py-8'>
      <div className='mx-auto mt-2 mb-10'>
        <button
          className='bg-main hover:bg-light-secondary transition-transform duration-200 hover:scale-105 text-black py-1 md:py-2 px-5 md:px-10 rounded font-bold shadow-md shadow-gray-950  mb-10'
          onClick={handleClick}
        >
          Contact Me
        </button>
      </div>

      <small className='text-center '>
        &copy; 2024 Micheal Palliparambil. All Rights Reserved.
      </small>
      <Script src='https://formspree.io/js/formbutton-v1.min.js' defer></Script>
      <Script src='https://unpkg.com/boxicons@2.1.4/dist/boxicons.js' />
    </footer>
  );
}
