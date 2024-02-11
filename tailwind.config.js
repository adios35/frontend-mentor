/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      colors: {
        "Very-dark-blue": "hsl(220, 13%, 13%)",
        "Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "Light-grayish-blue": "hsl(223, 64%, 98%)",
        "Pale-orange": "hsl(25, 100%, 94%)",
        Orange: "hsl(26, 100%, 55%)",
      },
    },
  },
  plugins: [],
};
