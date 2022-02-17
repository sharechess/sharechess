import { Style } from "../../../types";

const style: Style = {
  name: "Mono",
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
      color: "#999",
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
    data: "#0088ff66",
  },
  border: {
    type: "solid",
    data: {
      color: "#444",
    },
  },
  coords: {
    onLight: "#999",
    onDark: "#eee",
    onBorder: "#eee",
  },
};

export default style;
