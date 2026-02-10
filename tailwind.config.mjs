/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        night: {
          50: '#eef2ff',
          100: '#d9e0fc',
          200: '#b3c1f9',
          300: '#7a94f3',
          400: '#4a66e8',
          500: '#2a3fa0',
          600: '#1e2d6f',
          700: '#141f50',
          800: '#0d1538',
          900: '#080e24',
          950: '#040714',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        star: '#fffbe6',
      },
      fontFamily: {
        title: ['"Baloo 2"', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        'twinkle-slow': 'twinkle 5s ease-in-out infinite',
        'twinkle-fast': 'twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};
