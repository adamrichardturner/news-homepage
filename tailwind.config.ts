import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile-design': '375px',
        'desktop-design': '1440px',
      },
      colors: {
        primary: {
          'soft-orange': 'hsl(35, 77%, 62%)',
          'soft-red': 'hsl(5, 85%, 63%)',
        },
        neutral: {
          'off-white': 'hsl(36, 100%, 99%)',
          'grayish-blue': 'hsl(233, 8%, 79%)',
          'dark-grayish-blue': 'hsl(236, 13%, 42%)',
          'very-dark-blue': 'hsl(240, 100%, 5%)',
        },
      },
      fontSize: {
        body: '15px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '991px',
          xl: '1000px',
          '2xl': '1000px',
        },
      },
    },
  },
  plugins: [],
};

export default config;
