/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0B0B0F',
        'dark-light': '#1a1a2e',
        'dark-lighter': '#16213e',
        'accent': '#9d4edd',
        'accent-light': '#c77dff',
        'neon-purple': '#d60cf0',
        'neon-blue': '#00f0ff',
        'neon-pink': '#ff006e',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 12, 240, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 12, 240, 0.8)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.4), inset 0 0 15px rgba(0, 240, 255, 0.1)' },
          '50%': { boxShadow: '0 0 35px rgba(0, 240, 255, 0.7), inset 0 0 25px rgba(0, 240, 255, 0.2)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(212, 12, 240, 0.5), inset 0 0 20px rgba(212, 12, 240, 0.1)',
        'neon-blue': '0 0 20px rgba(0, 240, 255, 0.5), inset 0 0 20px rgba(0, 240, 255, 0.1)',
        'neon-glow': '0 0 30px rgba(212, 12, 240, 0.6), 0 0 60px rgba(0, 240, 255, 0.3)',
      },
      backdropBlur: {
        'xl': 'blur(12px)',
        'xxl': 'blur(16px)',
      },
    },
  },
  plugins: [],
}

