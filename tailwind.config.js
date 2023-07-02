/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-body-dark":
          "linear-gradient(225deg, rgba(15, 23, 42, 1) 0%,rgba(2, 6, 23, 1) 20%)",
        "gradient-card-body-dark":
          "linear-gradient(135deg, rgba(30, 41, 59, 1) 30%,rgba(15, 23, 42, 1) 70%)",
        "gradient-border-dark":
          "linear-gradient(135deg, rgba(51, 65, 85, 1) 0%,rgba(15, 23, 42, 1) 50%)",
        "gradient-body-light":
          "linear-gradient(225deg, rgba(226, 232, 240, 1) 0%,rgba(241, 245, 249, 1) 20%)",
        "gradient-card-body-light":
          "linear-gradient(135deg, rgba(203, 213, 225, 1) 30%,rgba(203, 213, 225, 1) 70%)",
        "gradient-border-light":
          "linear-gradient(135deg, rgba(203, 213, 225, 1) 0%,rgba(193, 203, 215, 1) 50%)",
      },
      screens: {
        sm: "540px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        "8xl": "2560px",
        // => @media (min-width: 1536px) { ... }
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 9/16)" },
      },
    },
  },
  plugins: [],
}
