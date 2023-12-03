import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        style={{ fontSize: '60px', fontWeight: 'bold' }}
        className='dark:text-white'
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{ fontSize: '40px', fontWeight: 'bold' }}
        className='dark:text-white'
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{ fontSize: '30px', fontWeight: 'bold' }}
        className='dark:text-white'
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{ fontSize: '25px', fontWeight: 'bold' }}
        className='dark:text-white'
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: '15px' }} className='dark:text-white'>
        {children}
      </p>
    ),

    ...components,
  };
}
