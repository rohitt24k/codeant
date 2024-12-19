import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#0d5649",
        // "primary-light-background": "#e0efd5",
        // "gray-dark": "#646464",
        // "gray-light": "#f6f6f6",
        // hyperlink: "#0070cc",
        // "black-light": "#333333",
        system: {
          black: "#181D27",
          white: "#FAFAFA",
          link: "#175CD3",
          bg: "#EDEEEF",
          error: "#E62D2D",
          success: "#85C83E",
          validation: "#FFD748",
        },
        gray: {
          d5d7da: "#D5D7DA",
          "414651": "#414651",
          818181: "#818181",
          "081735": "#081735",
        },
        blue: {
          eff8ff: "#EFF8FF",
          b2ddff: "#B2DDFF",
          "175cd3": "#175CD3",
          "1570ef": "#1570EF",
          "3178c6": "#3178c6",
          "9d90fa": "#9D90FA",
        },
        yellow: {
          f7df1e: "#f7df1e",
        },
        green: {
          "3776ab": "#3776ab",
        },
        cyan: {
          "00add8": "#00add8",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
