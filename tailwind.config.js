/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lobster:["Lobster", "serif"],
        ebgaramond:["EB Garamond", "serif"],
        crimson:["Crimson Text", "serif"]
      },
    },
  },
  plugins: [],
}

