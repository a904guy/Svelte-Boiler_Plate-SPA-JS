/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",   // Scan all Svelte, HTML, JS, and TS files in `/src`
    "./public/index.html"                     // If `index.html` is in the root folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
