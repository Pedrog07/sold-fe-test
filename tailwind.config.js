/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1440px'
    },

    extend: {
      colors: {
        'blue-light': '#00A3E0',
        green: '#84AE2B',
        orange: '#F93822',
        neutral: {
          100: '#FCFCFC',
          200: '#EFEFEF',
          300: '#F5F8FA',
          400: '#EBEAED',
          500: '#CFCFCF',
          800: '#333333',
          900: '#25282A',
          950: '#231F1F'
        }
      }
    }
  },
  plugins: []
}
