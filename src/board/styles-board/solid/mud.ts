import { Style } from "../../../types";

const style: Style = {
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
      color: "#b0a392",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#cfc8be",
    },
  },
  moveIndicator: {
    hueShift: 60,
    color: "#",
  },
  border: {
    type: "solid",
    data: {
      color: "#6e6559",
    },
  },
  coords: {
    onLight: "#6e6559",
    onDark: "#f5eee5",
    onBorder: "#f5eee5",
  },
};

export default style;
