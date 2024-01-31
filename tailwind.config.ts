import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "run-row": "run 15s linear infinite",
    },
    keyframes: {
      run: {
        "0%": {},
        "100%": { transform: "translateX(-50%)" },
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      bmd: "992px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        raleway: ["var(--font-raleway)"],
      },
      boxShadow: {
        little: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      content: {
        location: 'url("/icons/location.png")',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    mytheme: {
      primary: "#EEE",
      secondary: "#1F0B0B",
      error: "#FF8484",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
