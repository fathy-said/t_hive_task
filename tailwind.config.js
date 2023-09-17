/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#031d54",
        primaryBg_100: "#1976d2",
        secondaryBg: "#f5f5f5",
      },
    },

    container: {
      center: true,
      padding: "1rem",
    },
  },
};
