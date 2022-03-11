import { Style } from "../../../types";

const style: Style = {
  name: "Mono Goblin",
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
      color: "#468557",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#7DA989",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 40,
  },
  border: {
    type: "solid",
    data: {
      color: "#468557",
    },
  },
  coords: {
    onLight: "#00000088",
    onDark: "#ffffffcc",
    onBorder: "#ffffffcc",
  },
};

export default style;
