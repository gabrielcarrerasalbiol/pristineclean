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
        navy: {
          DEFAULT: "#0B172B",
          charcoal: "#172033",
          light: "#1e2d45",
        },
        emerald: {
          DEFAULT: "#00A88F",
          deep: "#007D70",
        },
        white: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F9F8",
        },
        mist: "#E8EEEC",
        slate: "#687486",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
