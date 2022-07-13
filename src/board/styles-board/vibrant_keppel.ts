import { Style } from "../../types";

const light = "#80ED99";
const dark = "#38A3A5";
const border = "#22577A";
const highlight = "#998CEB77";

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
