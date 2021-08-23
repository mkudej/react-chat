module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "border-color": "#BDBDBD",
      "button-color": "#2F80ED",
      gray: "#828282",
      white: "#FFFFFF",
      red: "red",
    },
    fontFamily: {
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
