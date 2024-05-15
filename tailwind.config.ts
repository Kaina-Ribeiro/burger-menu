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
        container: '#F8F9FA',
      },
      screens: {
        desktop: '1024px',
      },
      height: {
        '83': '1337px',
        '9.125': '146px',
        '67.9': '1071px',
      },
      maxWidth: {
        xl: '600px',
      },
      fontSize: {
        base: ['16px', '18.75px'],
        '2xl': ['24px', '28.13px'],
      },
    },
  },
  plugins: [],
};
export default config;
