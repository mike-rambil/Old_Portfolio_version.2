import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#81e6d9',
        primary: '#202023',
        secondary: '#fbd38d',
        accent: '#ff63c3',
        neutral: '#1a202c',
        neutral1: '#313134',

        light: '#f0e7db',
        'light-secondary': '#388697',
        'light-secondary-900': '#08415C',
        lightAccent: '#212326',
        'light-accent': '#fbd38d',
      },
    },
  },
  plugins: [],
};
export default config;
