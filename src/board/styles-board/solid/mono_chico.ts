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
      color: "#885953",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#AB8A86",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -30,
  },
  border: {
    type: "solid",
    data: {
      color: "#885953",
    },
  },
  coords: {
    onLight: "#00000088",
    onDark: "#ffffffcc",
    onBorder: "#ffffffcc",
  },
};

export default style;
