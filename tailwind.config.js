const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: false, // or 'media' or 'class'
  important:true,
  theme: {
    extend: {
      padding: {
        "content": "260px"
      },
      colors: {
        "pagebg": "#13141B",
        "cardbg": "#23232F",
        "cardbg-hover": "#393944",
        "tagbg": "#616169",
        "disable": "#424349",
        "weight-line": "rgba(255,255,255,.6)",
        "hover-line": "rgba(255,255,255,.4)",
        "simple-line": "rgba(255,255,255,.2)",
        "light-line": "rgba(255,255,255,.08)",
        "stress": "#fff",
        "sec-stress": "rgba(255,255,255,.6)",
        "second": "rgba(255,255,255,.4)",
        "placeholder": "rgba(255,255,255,.2)",
        "yellow-6":"#F1DC4A",
        "yellow-5":"#EED106",
        "yellow-4":"#9B8213",
        "yellow-3":"rgba(145,130,19,.5)",
        "yellow-2":"rgba(145,130,19,.15)",
        "yellow-hover":"rgba(240,208,64,.05)",
        "pink-6":"#FC476D",
        "pink-5":"#FF557E",
        "pink-4":"#AB1A3D",
        "green-6":"#62CDC9",
        "green-5":"#A7EFEC",
        "green-4":"#A7EFEC",
        "green-3":"#1B9691",
        "green-2":"rgba(98, 205, 201, 0.05)",
      },
      width:{
        "content":"66.6%"
      },
      fontFamily:{
        mulish:"Mulish"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.rotate-y-360': {
          transform: 'rotateY(360deg)',
        },
      })
    }),
  ],
  variants: {
    extend: {},
  }
}