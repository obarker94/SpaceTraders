import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-secondary": "#F7F7F8",
      }
    },
  },
  plugins: [],
} satisfies Config;
