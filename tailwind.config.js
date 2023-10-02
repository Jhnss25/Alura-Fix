/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        // Colores primarios
        primary: "#2a7ae4",
        // black
        blackDark: "rgb(0 0 0 / .9)",
        blackMedium: "#00000099",
        blackLight: "#00000080",
        blackLighter: "#9E9E9E",
        // gray
        grayDark: "#C2C2C2",
        grayMedium: "rgba(83, 88, 93, 1)",
        grayLight: "#F5F5F5",
        // error
        errorDark: "#C62828",
        errorMedium: "#E53935",
        errorLight: "#FCE7E7",
        // blue dark
        blueDark: "#06084b",

        // Videos
        frontend: "#6bd1ff",
        infra: "#9CD33B",
        backend: "#00C86F",
        marketing: "#6B5BE2",
        mobile: "#FFBA05",
        inovation: "#FF8C2A",
        ux: "#FF8C2A",
        dataScience: "#9CD33B",
      }
    },
  },
  plugins: [],
}

