/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cool-light': '#CEE5F2',  // Azul claro
        'cool-medium': '#ACCBE1', // Azul médio
        'cool-dark': '#7C98B3',   // Azul escuro
        'cool-darker': '#637081', // Cinza-azulado
        'cool-darkest': '#536B78', // Cinza mais escuro
      }
    },
  },
  plugins: [],
};
