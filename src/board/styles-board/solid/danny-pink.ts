import { Style } from "../../../types";

const style: Style = {
  name: "Danny Pink",
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
      color: "#965686",
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
      color: "#312B31",
    },
  },
  coords: {
    onLight: "#522F49",
    onDark: "#fcfce1",
    onBorder: "#eeeed2",
  },
};

export default style;
