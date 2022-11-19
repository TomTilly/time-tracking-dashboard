const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: 'hsl(246, 80%, 60%)',
        blue: 'hsl(195, 74%, 62%)',
        orange: 'hsl(15, 100%, 70%)',
        red: 'hsl(348, 100%, 68%)',
        green: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        yellow: 'hsl(43, 84%, 65%)',
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
        'violet-blue': 'hsl(246, 80%, 60%)',
      },
      backgroundImage: {
        'icon-exercise': "url('/icon-exercise')",
        'icon-play': "url('/icon-play')",
        'icon-self-care': "url('/icon-self-care')",
        'icon-social': "url('/icon-social')",
        'icon-study': "url('/icon-study')",
        'icon-work': "url('/icon-work')",
      },
      borderRadius: {
        card: defaultTheme.borderRadius.xl
      },
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
    },
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
