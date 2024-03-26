/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "logo-red" : "#ee3749",
      "logo-blue" : "#142445",
      "logo-violet" : "#2a0654",
    }
  },
  plugins: [],
})