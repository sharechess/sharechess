import { Style } from "../../../types";

const style: Style = {
  name: "Mono Mulberry",
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
      color: "#C24B84",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#D481A9",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -30,
  },
  border: {
    type: "solid",
    data: {
      color: "#C24B84",
    },
  },
  coords: {
    onLight: "#00000088",
    onDark: "#ffffffcc",
    onBorder: "#ffffffcc",
  },
};

export default style;
