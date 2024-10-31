import type { Config } from "tailwindcss";
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      colors: {
        primary: {
          "50": "#f0f7ff",
          "100": "#e0effe",
          "200": "#b9dffe",
          "300": "#7cc2fd",
          "400": "#36a6fa",
          "500": "#0c87eb",
          "600": "#006aca",
          "700": "#0055a4",
          "800": "#004887",
          "900": "#003c70",
          highliter: "#0d43a0",
          card: "#f1f1fa",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        sectionHadingColor: {
          "800": "#0d43a0",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
