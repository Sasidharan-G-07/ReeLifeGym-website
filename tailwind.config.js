/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          dark: "#0A0A0A",
          charcoal: "#1A1A1A",
          gold: "#C9933A",
          "gold-hover": "#DDAA55",
          gray: "#333333",
          light: "#F5F5F5",
          neon: "#FF0000",
          cardio: "#3B82F6",
          crossfit: "#06B6D4",
          strength: "#EF4444",
          nutrition: "#10B981",
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
