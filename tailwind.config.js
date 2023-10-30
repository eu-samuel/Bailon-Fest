module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carousel': "url('./src/images/carousel/background.png')",
        'home': "url('./src/images/home/bg.png')"
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'helvetica': ['Helvetica'],
        'montserrat': ['Montserrat'],
      },
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 100},
          '100%': { opacity: 0},
        },
      }),
    },
    plugins: [],
  }
}

