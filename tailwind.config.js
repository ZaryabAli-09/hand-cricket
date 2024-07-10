/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
      },
      fontFamily: {
        Poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        Urbanist: ['"Urbanist"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
