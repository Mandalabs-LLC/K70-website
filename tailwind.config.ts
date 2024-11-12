import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',       // Extra small devices
        'sm': '640px',       // Small devices
        'md': '820px',       // Medium devices
        'lg': '1024px',      // Large devices
        'xl': '1280px',      // Extra large devices
        '2xl': '1596px',     // 2x extra large devices
        '3xl': '1920px',     // Large screen laptops
        '4xl': '2560px',     // Larger monitors
        '5xl': '3840px',     // 4K monitors
      },
      colors:{
        blue: {
          DEFAULT: '#EAEFFA', //footer bg-color
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
