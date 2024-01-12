/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "Allura": ['Allura-Regular','sans-serif'],
      "Trajan": ['TrajanPro-Regular','serif'],
      "TrajanBold": ['TrajanPro-Bold','serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-white': '#F7F5F4',
        'brand-gray': '#E2E2E2',
        'brand-green': '#0F422D',
        'brand-red': '#81372A',
        'brand-gold': '#8F6A29',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
