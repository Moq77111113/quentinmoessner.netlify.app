/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.html', './app/**/*.svelte'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['sofia-pro', 'sans-serif'],
      display: ['poppins', 'sans-serif'],
      body: ['sofia-pro', 'sans-serif'],
    },
    minWidth: {
      10: "10%",
      20: "20%",
      30: "30%",
      40: "40%",
      50: "50%",
      60: "60%",
      70: "70%",
      80: "80%",
      90: "90%"
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray1: '#f8f8f8',
      gray2: '#dbe1e8',
      gray3: '#b2becd',
      gray4: '#6c7983',
      gray5: '#454e56',
      gray6: '#2a2e35',
      gray7: '#252525',
      link: '#0000ee',
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
      navy: colors.navy,
      amber: colors.amber,
      slate: colors.slate,
      zinc: colors.zinc,
      stone: colors.stone,
      neutral: colors.neutral,
      teal: colors.teal
    },
    extend: {
      boxShadow: {
        '3xl': '0 5px 20px rgb(0 0 0 / 30%)',
        '4xl': '0 5px 20px rgb(0 0 0 / 90%)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'font-weight': 'normal',
              'font-size': '2.5rem',
            },
            h2: {
              'font-weight': 'normal',
              'font-size': '2rem',
            },
            h3: {
              'font-weight': 'normal',
              'font-size': '1.75rem',
            },
            h4: {
              'font-weight': 'normal',
              'font-size': '1.5rem',
            },
            h5: {
              'font-weight': 'normal',
              'font-size': '1.25rem',
            }
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};