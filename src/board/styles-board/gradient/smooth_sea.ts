import { Style } from "../../../types";

const style: Style = {
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#2881E4", "#9E52FF"],
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff7f",
    },
  },
  moveIndicator: {
    hueShift: 0,
    color: "#ff00ff55",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#1863B7", "#773DC1"],
    },
  },
  coords: {
    onLight: "#4750BC",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
