/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    /** for TailwindCSS in MDX files */
    "./mdxComponents/**/*.{js,ts,jsx,tsx}", // JSX components for MDX files
    "./content/**/*.{md,mdx}", // MDX files
    "./.contentlayer/**/*",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.875rem",
            },
            a: {
              textDecoration: "none",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: [
      // "cmyk",
      {
        luxuryDark: {
          ...require("daisyui/src/colors/themes")["[data-theme=luxury]"],
          "base-content": "#f7f8f8",
          "info-content": "#d0d6e0",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
