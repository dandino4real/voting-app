

import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import flowbite from "flowbite-react/tailwind";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", 
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        fadeBg: {
          '0%': { backgroundColor: 'rgba(255, 255, 255, 0)' },
          '100%': { backgroundColor: 'rgba(255, 255, 255, 1)' },
        },
      },
      animation: {
        fadeBg: 'fadeBg 2s ease-in-out forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        basecolour: "#017358",
        basecolour_hover: "#01CD9C"
      },
    },
  },
  darkMode: "class", // Added dark mode configuration from NextUI
  plugins: [
    require("daisyui"), 
    nextui(), 
    flowbite.plugin(),
  ],
};

export default config;
