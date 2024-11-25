import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      animation: ['active','focus','hover']
    }
  },
  theme: {
    extend: {
      animation:{
        rotate_90:"rotate_90 0.2s forwards",
      },
      keyframes:{
        rotate_90: {
          "0%": {
            transform: "rotate(0deg)", // Start with no rotation
          },
          "100%": {
            transform: "rotate(90deg)" // Rotate 90 degrees clockwise and stay
          },
        },
        
      },
      
      colors: {
        'light-white': '#FFFFFF',
        'pink': '#FFEEEB',
        'lightPink': '#FFF2F0',
        'color-orange': '#FF5A3C',
        'slider-background-color': '#F8F8F9',
      },
      fontFamily: {
        bodyfont: ['__Nunito_Sans_601d73', '__Nunito_Sans_Fallback_601f73'],
        headfont: ['Nunito Sans', 'sans-serif'],
        flaticon: ['flaticon'],
        poppins: ['Poppins', 'ans-serif'],
        poppinsSemibold: ['Poppins SemiBold', 'ans-serif'],
        poppinsExtraLight: ['Poppins ExtraLight', 'ans-serif'],
        poppinsLight: ['Poppins Light', 'ans-serif'],
        poppinsExtraBold: ['Poppins ExtraBold', 'ans-serif'],
        poppinsBlack: ['Poppins Black', 'ans-serif'],
        icomoon: ['icomoon'],
        nunitoLight: ['Nunito Light'],
        nunito_Medium: ['Nunito Medium'],
        nunito_SemiBold: ['Nunito SemiBold'],
        nunito_ExtraBold: ['Nunito ExtraBold'],
        nunito_Bold: ['Nunito Bold'],
        nunito_Black: ['Nunito Black'],
      },
      screens: {
        custom_bigScreen: '1350px',
        custom_screen: '1200px',
        custom_small: '570px'
      },
      boxShadow: {
        'box-shadow-4': '0 5px 20px 0 rgba(23,44,82,.1)',
      },
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }
  ],
};
export default config;
