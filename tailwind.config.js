module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: {
        'preserve-3d': 'preserve-3d',
      },
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
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        textGlide: {
          '0%': { transform: 'translateX(-10px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInText: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
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
        'fade-in': 'fadeIn 1s ease-in-out',
        'text-glide': 'textGlide 0.5s ease-out',
        'fade-in-text': 'fadeInText 1s ease-in-out',
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
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.perspective': { perspective: '1000px' },
      '.rotate-y-0': { transform: 'rotateY(0deg)' },
      '.rotate-y-[-120deg]': { transform: 'rotateY(-120deg)' },
    })
  },],
};
