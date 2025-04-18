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
        HoverBtn: "var(--color-HoverBtn)",
        Bg: "var(--color-Bg)",
        Heading: "var(--color-Heading)",
        varientColor: "var(--color-varientColor)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 rgba(34, 211, 238, 0)",
          },
          "50%": {
            boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)",
          },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        floatY: "floatY 3s ease-in-out infinite",
        floatX: "floatX 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
