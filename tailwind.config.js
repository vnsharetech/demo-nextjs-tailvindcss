module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "8xl2": "92px",
        "7xl2": "78px",
        "4xl2": "34px",
        base2: "17px",
        base3: "27px",
      },
      lineHeight: {
        88: "88px",
        68: "68px",
        44: "44px",
        34: "34px",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "orange-light": "#FEF2E9",
      orange: "#FF701F",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      orange: "#FF701F",
      navigation: "#938B86",
      dark: "#150D08",
      medium: "#635C58",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
