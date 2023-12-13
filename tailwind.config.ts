import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgYellow: "#FFFCF5",
        blueBrand: "#001466",
        blueBrandLight: "#0C4AC2",
        transparentText: "rgba(0, 0, 0, 0.70)",
        transparentBg: "rgba(0, 0, 0, 0.02)",
        blackText: "#081226",
        gradientBlue1: "#102857",
        gradientBlue2: "#063AA0",
        gradientBlue3: "#0049D5",
        statusGreen: "#32DE6D",
      },
      fontFamily: {
        formula: ["var(--font-formula)"],
        neueMontrealRegular: ["var(--font-neueMontrealRegular)"],
        neueMontrealMedium: ["var(--font-neueMontrealMedium)"],
        neueMachina: ["var(--font-neueMachina)"],
      },
      fontSize: {
        heading: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
