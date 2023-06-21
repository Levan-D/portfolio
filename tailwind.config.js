/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-body":
          "linear-gradient(225deg, rgba(15, 23, 42, 1) 0%,rgba(2, 6, 23, 1) 20%)",
        "gradient-main":
          "linear-gradient(135deg, rgba(30, 41, 59, 1) 30%,rgba(15, 23, 42, 1) 70%)",
        "gradient-border":
          "linear-gradient(135deg, rgba(51, 65, 85, 1) 20%,rgba(15, 23, 42, 1) 55%)",
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
        tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
      },
    },
  },
  plugins: [],
}
