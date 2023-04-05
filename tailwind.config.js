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
            cardHover: '#ecececc0',
            borderGrey: '#cacaca'
         },
         boxShadow: {
            projectImg: '0px 10px 20px rgba(0, 0, 0, 0.1)'
         }
      },
   },
   plugins: [
      require("tailwindcss-scoped-groups")({
         groups: ["one", "two"],
      }),
   ],
}
