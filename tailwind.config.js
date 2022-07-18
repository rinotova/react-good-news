module.exports = {
  darkMode: 'class',
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
