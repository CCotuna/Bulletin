/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}", // Dacă folosești directorul `src`
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        code: ["var(--font-code)", "monospace"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
}
