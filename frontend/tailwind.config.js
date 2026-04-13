/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        eco: {
          bg: "#020617",
          card: "#0f172a",
          green: "#064e3b",
          teal: "#0d9488",
          blue: "#0ea5e9"
        }
      }
    }
  },
  plugins: []
};
