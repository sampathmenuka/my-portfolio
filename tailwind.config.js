// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-gray': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'green-accent': '#4ade80',
        'green-teal': '#64ffda',
        'dark-navy': '#1a1a2e',
        'dark-accent': '#16162a',
      }
    },
  },
  plugins: [],
};
