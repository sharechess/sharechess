import { Style } from "../../types";

const style: Style = {
  name: "Avocado",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#72b339",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ececa4",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 70,
  },
  border: {
    type: "solid",
    data: {
      color: "#1f2b15",
    },
  },
  coords: {
    onLight: "#4d7a26",
    onDark: "#ffffc4",
    onBorder: "#ececa4",
  },
};

export default style;
