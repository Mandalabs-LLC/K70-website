import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          DEFAULT: '#EAEFFAE5', //footer bg-color
          light: '#2B76A3',     //text light-blue
          dark: '#024B66',      //text and bg dark-blue
        },
        primary: {
          DEFAULT: '#1B1F2A', // default black text
          light: '#2D4249',   // greyish-blue 
        },
        white:{
          DEFAULT:'#FAFBFD',
        }
      },
    },
  },
  plugins: [],
};
export default config;
