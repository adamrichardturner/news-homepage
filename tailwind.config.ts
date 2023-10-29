import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1024px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
