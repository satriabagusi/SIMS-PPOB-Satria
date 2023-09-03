/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-login-img': "url('/images/Illustrasi Login.png')",
        'card-balance': "url('/images/Background Saldo.png')"
      },
      colors:{
        'primary-red': '#F42619',
      }
    },
  },
  plugins: [],
}

