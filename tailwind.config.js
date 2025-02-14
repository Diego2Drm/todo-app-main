/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary */
        'Bright-Blue': ' #3a7bfd',
        'Check-Background1': '#57ddff',
        'Check-Background2': '#c058f3',

        /* Light Theme */
        'Very-Light-Gray': '#fafafa',
        'Very-Light-Grayish-Blue': '#e4e5f1',
        'Light-Grayis-Blue': '#d2d3db',
        'Dark-Grayish-Blue-light': '#9394a5',
        'Very-Dark-Grayish-Blue1': '#484b6a',

        /* Dark Theme */
        'Very-Dark-Blue': '#161722',
        'Very-Dark-Desaturated-Blue': '#25273c',
        'Light-Grayish-Blue': '#cacde8',
        'Light-Grayish-Blue-hover': '#e4e5f1', /* (hover) */
        'Dark-Grayish-Blue-dark': '#777a92',
        'Very-Dark-Grayish-Blue2': '#4d5066',
        'Very-Dark-Grayish-Blue3': '#393a4c',
      },
      fontFamily: {
        /* Fonts */
        'josefin':[ "Josefin Sans", "serif"],
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

