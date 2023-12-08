import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '5/3': '5/3',
        '2/1': '2/1',
      },
      colors: {
        red: '#EB2027',
      },
      screens: {
        '3xl': '1920px',
      },
      maxWidth: {
        layout: '120rem',
      },
    },
  },
  plugins: [],
}
export default config
