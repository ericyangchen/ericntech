/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    /** for TailwindCSS in MDX files */
    "./mdxComponents/**/*.{js,ts,jsx,tsx}", // JSX components for MDX files
    "./content/**/*.{md,mdx}", // MDX files
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            h1: {
              fontSize: "1.875rem",
            },
            p: {
              marginTop: 0,
            },
          },
        },
        lg: {
          css: {
            color: "#333",
            h1: {
              fontSize: "2rem",
            },
            p: {
              marginTop: 0,
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
    themes: ["cmyk", "luxury"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "luxury",
  },
};
