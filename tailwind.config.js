/** @type {import('tailwindcss').Config} */
export default {
     content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
     theme: {
          extend: {
               fontFamily: {
                    poppins: ['Poppins', 'sans-serif'],
                    inter: ['Inter', 'sans-serif'],
               },
          },
     },
     plugins: [require('flowbite/plugin')],
};
