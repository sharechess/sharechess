import { Style } from "../../../types";

const style: Style = {
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#96C93D", "#00B09B"],
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
    color: "#ffff0055",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#65A32E", "#007A80"],
    },
  },
  coords: {
    onLight: "#328E57",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
