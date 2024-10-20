// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths according to your project structure
//     './public/index.html'], // Include this if you're using a public folder for HTML files],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}