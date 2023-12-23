/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    variants: {
      extend: {
        display: ['group-focus'],
        opacity: ['group-focus'],
        inset: ['group-focus']
      },
    },

    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },

      colors: {
        yellow: {
          800: '#EBA417',
          700: '#E5CD3D',
        },
        gray: {
          50: '#E6EDF3',
          100: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214'
        },
        blue: {
          50: '#2b3566',
          100: '#9da5d1'
        },
      }
    },
  },
  plugins: [],
}

