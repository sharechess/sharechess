import { Style } from "../../../types";

const style: Style = {
  name: "Mono Teal",
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
      color: "#106C73",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#4C989D",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -30,
  },
  border: {
    type: "solid",
    data: {
      color: "#106C73",
    },
  },
  coords: {
    onLight: "#00000088",
    onDark: "#ffffffcc",
    onBorder: "#ffffffcc",
  },
};

export default style;
