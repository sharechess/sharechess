import { Style } from "../../types";

const style: Style = {
  name: "Lila",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#c0acb5",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#e5d0cb",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 180,
  },
  border: {
    type: "solid",
    data: {
      color: "#735c66",
    },
  },
  coords: {
    onLight: "#c0acb5",
    onDark: "#e5d0cb",
    onBorder: "#e5d0cb",
  },
};

export default style;
