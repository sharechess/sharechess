import { Style } from "../../../types";

const style: Style = {
  name: "Rose",
  category: "mono",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#f04a73",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffb8c9",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -30,
  },
  border: {
    type: "solid",
    data: {
      color: "#a62444",
    },
  },
  coords: {
    onLight: "#f04a73",
    onDark: "#ffb8c9",
    onBorder: "#ffb8c9",
  },
};

export default style;
