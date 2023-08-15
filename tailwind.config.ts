import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'brand-primary': '#0b101b',
      'brand-secondary': '#181E29',
      'brand-accent-primary': '#EB568E',
      'brand-accent-secondary': '#144EE3',
      'brand-lite': '#C9CED6',
    },
    boxShadow: {
      '3xl': '10px 9px 22px 0px rgba(20, 78, 227, 0.38)',
    },
  },
  plugins: [],
};
export default config;
