module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
        },
        secondary: {
          500: '#a855f7',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        '2xl': '16px',
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(0,0,0,0.12)',
      }
    },
  },

  plugins: [],
}


