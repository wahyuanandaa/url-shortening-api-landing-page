/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          darkVoilet: "hsl(257, 27%, 26%)"
        },
        secondary: {
          red: "hsl(0, 87%, 67%)"
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayTwo: "hsl(230, 25%, 95%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          darkBlue: "hsl(255, 11%, 22%)",
          darkViolet: "hsl(260, 8%, 14%)"
        }
      }
    }
  },

  plugins: []
}
