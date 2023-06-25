/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      veryDarkBlue: '#1E1F36',
      darkBlue: '#4B4C5F',
      orange: '#F47B56',
      backGroundColorOne: '#B068E9', 
      backgroundColorTwo: '#6463E7',
      silver: '#787887',
      offWhite: '#E8E8EA'
    }
  },
  plugins: [],
}