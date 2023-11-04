'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Footer() {
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
          backgroundColor: 'red',
        },
        button: {
          backgroundColor: 'red',
        },
      },
      initiallyVisible: false,
    });
  }, []);

  return (
    <footer className='max-w-screen bg-primary'>
      <Script src='https://formspree.io/js/formbutton-v1.min.js' defer></Script>
    </footer>
  );
}
