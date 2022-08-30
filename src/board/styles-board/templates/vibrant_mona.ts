import { Style } from "../../../types";

const light = "#FFC8C8";
const dark = "#FF9999";
const border = "#444F5A";
const highlight = "#00ffff33";

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
