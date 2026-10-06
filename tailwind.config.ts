import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-2": "rgb(var(--paper-2) / <alpha-value>)",
        "paper-3": "rgb(var(--paper-3) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        vermilion: "rgb(var(--accent) / <alpha-value>)",
        mustard: "rgb(var(--gold) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        violet: "rgb(var(--violet) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        spin: { to: { transform: "rotate(360deg)" } },
        rise: { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        pulseGlow: { "0%,100%": { opacity: ".45", transform: "scale(.96)" }, "50%": { opacity: ".9", transform: "scale(1.03)" } },
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        rise: "rise .6s ease both",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
