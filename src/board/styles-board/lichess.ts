import { Style } from "../../types";

const style: Style = {
  name: "Lichess",
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
    data: 40,
  },
  border: {
    type: "solid",
    data: {
      color: "#896d56",
    },
  },
  coords: {
    onLight: "#b58863",
    onDark: "#f0d9b5",
    onBorder: "#f0d9b5",
  },
};

export default style;
