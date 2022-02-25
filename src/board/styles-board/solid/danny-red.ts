import { Style } from "../../../types";

const style: Style = {
  name: "Danny Red",
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
      color: "#965656",
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
      color: "#312B2D",
    },
  },
  coords: {
    onLight: "#522F2F",
    onDark: "#fcfce1",
    onBorder: "#eeeed2",
  },
};

export default style;
