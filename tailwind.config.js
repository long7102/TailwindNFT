module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
        orange: "#ffa400",
        grayDark: "#020005",
        grayDark2: "#131528",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: { config: "./tailwind.config.js" },
      autoprefixer: {},
    },
  ],
};
