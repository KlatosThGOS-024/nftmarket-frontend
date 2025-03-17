/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Make sure you include the correct paths
  theme: {
    extend: {},
  },
  plugins: [scrollbarHide],
};
