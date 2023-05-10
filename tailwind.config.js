/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'gold-c2': '#FFC107',
      'red-c2': '#FB2448',
      'off-navy-blue-c2': '#3F509E',
      'navy-blue-c2': '#151875',
      'purple-c2': '#AC00FF',
      'off-purple-c2': '#9F63B5',
      'blue-c2': '#2F1AC4',
      'pantone-c2': '#E0D3F5',
      'sky-blue-c2': '#EAEBED',
    }
  },
  plugins: [],
}