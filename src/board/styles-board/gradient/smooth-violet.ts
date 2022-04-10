import { Style } from "../../../types";

const style: Style = {
  name: "Smooth Violet",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#DC3BCC", "#9E52FF"],
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
    type: "color",
    data: "#ffaa0055",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#AF2EA2", "#8243D3"],
    },
  },
  coords: {
    onLight: "#9838BA",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
