/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#212121", // Replace '#ff00ff' with your desired color code
      },
    },
  },
  plugins: [],
};
