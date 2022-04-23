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
      color: "#514FAE",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#8583C6",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -30,
  },
  border: {
    type: "solid",
    data: {
      color: "#514FAE",
    },
  },
  coords: {
    onLight: "#00000088",
    onDark: "#ffffffcc",
    onBorder: "#ffffffcc",
  },
};

export default style;
