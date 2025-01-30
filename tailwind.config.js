module.exports = {
  darkMode: "class", 
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)", 
        primary: "var(--color-primary)", 
        secondary: "var(--color-secondary)",
        container: "var(--color-container)", 
        button: "var(--color-button)", 
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
        heading: ["Poppins", "sans-serif"], 
      },
  
    },
  },
  plugins: [],
};
