module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    minWidth: {
      "1/3": "33%",
    },
    colors: {
      primary: "#5865F2",
      cardbg: "#36393F",
      "text-input-border": "rgba(0,0,0,0.3)",
      "text-input-bg": "#303339",
      "message-input-bg": "#40444B",

      "border-color": "#BDBDBD",
      "button-color": "#2F80ED",
      gray: "#828282",
      white: "#FFFFFF",
      red: "rgb(237, 66, 69)",
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
