import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xsm: "clamp(0.7813rem, 0.7427rem + 0.1927vi, 0.88rem)",
      sm: "clamp(0.9375rem, 0.8741rem + 0.3171vi, 1.1rem)",
      base: "clamp(1.125rem, 1.0274rem + 0.4878vi, 1.375rem)",
      md: "clamp(1.35rem, 1.2061rem + 0.7195vi, 1.7188rem)",
      lg: "clamp(1.944rem, 1.6546rem + 1.4469vi, 2.6855rem)",
      xl: "clamp(2.3328rem, 1.9331rem + 1.9983vi, 3.3569rem)",
      "2xl": "clamp(2.7994rem, 2.2543rem + 2.7255vi, 4.1962rem)"
    },
    lineHeight: {
      100: "100%",
      110: "110%",
      115: "115%",
      120: "120%",
      130: "130%",
      140: "140%",
      150: "150%",
    },
    extend: {
      colors: {
        blueish: "rgba(166, 178, 226, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};
export default config;
