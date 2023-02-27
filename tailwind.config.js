/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: "jit",
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            priCol: '#436bad',
            headingCol: '#121212',
            white: '#fff',
            backGrey: '#ececec',
            underlineGrey: '#adadad',
            cardHover: '#ecececc0'
         }
      },
   },
   plugins: [
      require("tailwindcss-scoped-groups")({
         groups: ["one", "two"],
      }),
   ],
}
