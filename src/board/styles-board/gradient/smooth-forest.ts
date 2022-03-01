import { Style } from "../../../types";

const style: Style = {
  name: "Smooth Forest",
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
    type: "color",
    data: "#00ffee55",
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
