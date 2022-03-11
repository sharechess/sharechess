import { Style } from "../../../types";

const style: Style = {
  name: "Mono Mahogany",
  category: "solid",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#CA3838",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#DA7373",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 30,
  },
  border: {
    type: "solid",
    data: {
      color: "#CA3838",
    },
  },
  coords: {
    onLight: "#00000088",
    onDark: "#ffffffcc",
    onBorder: "#ffffffcc",
  },
};

export default style;
