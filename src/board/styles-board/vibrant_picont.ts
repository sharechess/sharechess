import { Style } from "../../types";

const light = "#BBE1FA";
const dark = "#46B3E6";
const border = "#2E279D";
const highlight = "#55FF0055";

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
