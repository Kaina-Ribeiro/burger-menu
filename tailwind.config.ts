import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#4F372F', dark: '#36231C' },
        body: '#EEEEEE',
        'gray-50': '#F8F9FA',
        'gray-100': '#DADADA',
        'gray-200': '#464646',
        'gray-300': '#5F5F5F',
        'black-100': '#121212',
      },
      height: {
        '83': '1337px',
        '9.125': '146px',
      },
      minHeight: {
        '67.9': '1071px',
      },
      maxWidth: {
        xl: '600px',
      },
      fontSize: {
        base: ['16px', '18.75px'],
        '2xl': ['24px', '28.13px'],
        lg: ['18px', '21.09px'],
      },
      boxShadow: {
        sm: '0px 2px 2px 0px #0000001F',
        md: '0px 2px 14px 0px #00000024',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
