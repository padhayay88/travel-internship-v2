/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}" // Scan all relevant files inside src
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc. here if needed
      // For example, to add a custom color:
      // colors: {
      //   primary: '#1DA1F2',
      // },
    },
  },
  plugins: [
    // Add any Tailwind plugins here if you want, e.g. forms, typography, etc.
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
