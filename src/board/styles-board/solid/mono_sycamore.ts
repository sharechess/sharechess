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
      color: "#809D41",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#A6BA7A",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 60,
  },
  border: {
    type: "solid",
    data: {
      color: "#809D41",
    },
  },
  coords: {
    onLight: "#00000088",
    onDark: "#ffffffcc",
    onBorder: "#ffffffcc",
  },
};

export default style;
