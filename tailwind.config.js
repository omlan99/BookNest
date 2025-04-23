/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    // themes: ["light", "dark"],
    themes: [
      "light",
      {
        myLightTheme : {
          // colors: {
          //   'text': '#0b0e0c',
          //   'background': '#f9faf9',
          //   'primary': '#74907c',
          //   'secondary': '#b2bfc2',
          //   'accent': '#96a4ab',
          //  },
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#74907c", // Change primary color
          "secondary": "#b2bfc2", // Change secondary color
          "accent": "#96a4ab", // Change accent color
          "neutral": "#1E293B", // Change neutral color
          "base-100": "#f9faf9", // Change background color
          "base-200": "#EDEFEC", // Change background color
          "base-300": "#EBEFEF", // Change background color
          "base-400": "#EdEFEc", // Change background color
          "base-content": "#0b0e0c", // Change background color
        }
      },
      {
        // colors: {
        //   'text': '#f1f4f2',
        //   'background': '#050605',
        //   'primary': '#6f8b77',
        //   'secondary': '#3d4a4d',
        //   'accent': '#546269',
        //  },
        myDarkTheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"], // Inherit default dark theme
          // "primary": "#613e2e", // Change primary color
          "primary": "#6f8b77", // Change primary color
          "secondary": "#3d4a4d", // Change secondary color
          "accent": "#546269", // Change accent color
          "neutral": "#1E293B", // Change neutral color
          "base-100": "#050605", // Change background color
          "base-200": "#101210", // Change background color
          "base-300": "#050605", // Change background color
          "base-content": "#f1f4f2", // Change background color
          "info": "#3B82F6",
          "success": "#22C55E",
          "warning": "#EAB308",
          "error": "#EF4444",
        },
      },
    ],
  },
}


