/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cornerstone: {
          green: '#0E3B2E',
          sage: '#8FAF9A',
          cream: '#F4EFE6',
          gold: '#C7A35A',
          ink: '#08110D'
        }
      }
    }
  },
  plugins: []
};
