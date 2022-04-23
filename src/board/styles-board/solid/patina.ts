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
      color: "#93b092",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#becfc2",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 90,
  },
  border: {
    type: "solid",
    data: {
      color: "#596e59",
    },
  },
  coords: {
    onLight: "#596e59",
    onDark: "#e4f5e4",
    onBorder: "#e4f5e4",
  },
};

export default style;
