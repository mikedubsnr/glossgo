import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0A0A0A",
          50: "#1A1A1A",
          100: "#141414",
          200: "#0F0F0F",
          300: "#0A0A0A",
          400: "#050505",
        },
        rose: {
          50: "#FFF5F5",
          100: "#FFE0E0",
          200: "#FFC4C4",
          300: "#FF9E9E",
          400: "#F5A0A0",
          500: "#D4A5A5",
          600: "#C49595",
          700: "#B08080",
          800: "#9A6B6B",
          900: "#7A5050",
        },
        gold: {
          50: "#FFF9F0",
          100: "#FFF0D9",
          200: "#FFE0B3",
          300: "#FFD08A",
          400: "#E8C39E",
          500: "#D4AF37",
          600: "#C4A030",
          700: "#B08D28",
          800: "#9A7B20",
          900: "#7A6018",
        },
        champagne: {
          50: "#FFFDF8",
          100: "#FFF8ED",
          200: "#FFF0D6",
          300: "#FFE4B8",
          400: "#E8D5B7",
          500: "#D4C4A8",
          600: "#C4B498",
          700: "#B0A088",
          800: "#9A8B78",
          900: "#7A6D5E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
