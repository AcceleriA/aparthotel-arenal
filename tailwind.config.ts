import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Littoral Silence - Arenal Design System
        'deep-coastal': '#1B4965',
        'limestone': '#D4A574',
        'maritime-pine': '#5B7553',
        'roof-clay': '#C17854',
        'bleached-stone': '#FAF8F5',
        'terracotta': '#C17854',
        'sand': '#D4A574',
      },
      fontFamily: {
        'italiana': ['Italiana', 'serif'],
        'instrument': ['Instrument Sans', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'jura': ['Jura', 'sans-serif'],
      },
      letterSpacing: {
        'arenal': '0.15em',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.10)',
      },
      screens: {
        'xs': '640px',
        'md': '1024px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
