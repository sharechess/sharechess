import { Style } from "../../../types";

const style: Style = {
  name: "Lichess",
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
      color: "#b58863",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#f0d9b5",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -40,
  },
  border: {
    type: "solid",
    data: {
      color: "#916655",
    },
  },
  coords: {
    onLight: "#9c6f49",
    onDark: "#f9f0e1",
    onBorder: "#f9f0e1",
  },
};

export default style;
