import { Style } from "../../../types";

const light = "#F69E7B";
const dark = "#383E56";
const border = "#252732";
const highlight = "#00ffee44";

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
