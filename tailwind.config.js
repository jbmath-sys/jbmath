/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jb: {
          blue: "#0B3A82",   // UAZ-ish blue
          green: "#00B894",  // brand accent
        }
      }
    },
  },
  plugins: [],
}
