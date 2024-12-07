/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white:'#f2f2f0',
        black:'#2d4059',
        // white:'#f7ebc9',
        // black:'#814906',
        // white:'#fdf3f3',
        // black:'#724060',
        // white:'#fffbe3',
        // black:'#26271a',
        // white:'#d1dbbd',
        // black:'#3e606f',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
