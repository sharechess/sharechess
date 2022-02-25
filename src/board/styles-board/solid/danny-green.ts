import { Style } from "../../../types";

const style: Style = {
  name: "Danny Green",
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
      color: "#569666",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#eeeed2",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#ffff007f",
  },
  border: {
    type: "solid",
    data: {
      color: "#2B312B",
    },
  },
  coords: {
    onLight: "#2F5238",
    onDark: "#fcfce1",
    onBorder: "#eeeed2",
  },
};

export default style;
