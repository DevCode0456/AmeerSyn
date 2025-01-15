module.exports = {
  darkMode: "class", 
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)", 
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
        heading: ["Poppins", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
