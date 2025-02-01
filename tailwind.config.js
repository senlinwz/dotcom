module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#194689",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
