import { Style } from "../../types";

const style: Style = {
  name: "Glass",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#ffffff33",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff99",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#00ffff55",
  },
  border: {
    type: "solid",
    data: {
      color: "#ffffff66",
    },
  },
  coords: {
    onLight: "#222",
    onDark: "#ddd",
    onBorder: "#ddd",
  },
};

export default style;
