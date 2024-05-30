import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        kbPurpleSecondary: "#A8A4FF",
        kbPurpleMain: "#635fc7",
        kbBlack: "#000112",
        kbVeryDarkGrey: "#20212C",
        kbDarkGrey: "#2B2C37",
        kbDarkLines: "#3E3F4E",
        kbMediumGrey: "#828FA3",
        kbLightLines: "#E4EBFA",
        kbLightGrey: "#F4F7FD",
        kbRed: "#EA5555",
        kbRedSecondary: "#FF9898",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        text: "hsl(var(--text))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
