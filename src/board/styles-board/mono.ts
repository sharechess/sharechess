import { Style } from "../../types";

const style: Style = {
  name: "Mono",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#bbb",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#eee",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#00ff0044",
  },
  border: {
    type: "solid",
    data: {
      color: "#444",
    },
  },
  coords: {
    onLight: "#bbb",
    onDark: "#eee",
    onBorder: "#eee",
  },
};

export default style;
