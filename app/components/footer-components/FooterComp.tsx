import Script from 'next/script';
import { useEffect, useState } from 'react';
import Socials from '../Socials';

export default function FooterComp() {
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
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 10000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center border-b-[1px] border-zinc-900'>
        <div className='dark:text-teal-500 mx-auto mt-2 mb-10 text-3xl font-extrabold text-primary '>
          Let's TALK!
        </div>
        <div className='mx-auto  flex justify-center items-center md:ml-4'>
          <button
            className='bg-main dark:bg-light-secondary-900 shadow-inner  hover:bg-main transition-transform duration-200 hover:scale-105 text-black dark:text-white py-1 md:py-2 px-5 md:px-10 rounded font-bold shadow-md shadow-gray-950  mb-10'
            onClick={handleClick}
          >
            Chat &gt;
          </button>
        </div>
      </div>
      <div className='flex justify-center mt-2 gap-2'>
        <Socials />
      </div>
      <small className='text-center text-xs text-black dark:text-slate-600 mt-10'>
        &copy; 2024 Micheal Palliparambil. All Rights Reserved.
      </small>
      <Script src='https://formspree.io/js/formbutton-v1.min.js' defer />
    </>
  );
}
