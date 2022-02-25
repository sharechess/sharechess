import { Style } from "../../../types";

const style: Style = {
  name: "Danny Purple",
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
      color: "#765696",
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
      color: "#2D2B31",
    },
  },
  coords: {
    onLight: "#412F52",
    onDark: "#fcfce1",
    onBorder: "#eeeed2",
  },
};

export default style;
