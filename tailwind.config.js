/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {},
      colors: {
         priCol: '#436bad',
         headingCol: '#121212',
         white: '#fff',
         backGrey: '#ececec',
         underlineGrey: '#adadad'
      }
   },
   plugins: [],
}
