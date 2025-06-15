/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish" , "sans-serif"],
      },
      colors: {
        featureColor : "#181C2E",
        featureColor2: "#2563EB",
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBLue300: "#4b94ed",
        lightBLue500: "#0672e7",
        greenLight: "61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
         animation: {
        'scroll': 'scroll 10s infinite',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateY(0%)',
            'animation-timing-function': 'linear',
          },
          '100%': {
            transform: 'translateY(-50%)',
            'animation-timing-function': 'linear',
          },
        },
      },
    },
  },
  plugins: [],
}

