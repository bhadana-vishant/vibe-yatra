module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"]
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        float: 'float 8s ease-in-out infinite',
        gradientShift: 'gradientShift 15s ease infinite',
        shimmer: 'shimmer 1s ease-in-out',
      },
    }
  },
  plugins: [],
}
