import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
} satisfies Config