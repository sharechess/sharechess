import { Style } from "../../types";

const light = "#DFCDC3";
const dark = "#5F6769";
const border = "#3C4245";
const highlight = "#6ECB6377";

const style: Style = {
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
      color: dark,
    },
  },
  light: {
    type: "solid",
    data: {
      color: light,
    },
  },
  moveIndicator: {
    color: highlight,
  },
  border: {
    type: "solid",
    data: {
      color: border,
    },
  },
  coords: {
    onLight: dark,
    onDark: light,
    onBorder: light,
  },
};

export default style;
