/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: () => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        large: "80vh",
        120: "30rem",
        150: "37.5rem",
        200: "50rem",
        250: "62.5rem",
        300: "75rem",
        350: "87.5rem",
        400: "100rem",
        screenpx: "101vh",
        "screen1.5": "150vh",
        screen2: "200vh",
      }),
      maxWidth: ()=> ({
        "1/2" : "50%",
        "1/3" : "33.333333%",
        "1/4" : "25%",
      })
    },
  },
  plugins: [],
}