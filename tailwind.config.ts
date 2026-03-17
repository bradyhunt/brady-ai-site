import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2D5A',
          light: '#4a9edd',
          dark: '#0a1f3d',
          link: '#1E5CB3',
        },
      },
      maxWidth: {
        content: '960px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
