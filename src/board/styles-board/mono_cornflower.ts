import { Style } from "../../types";

const bgColor = "#7673FF";
const fgColor = "#BAB9FF";
const darkFontColor = "#3734B0";
const lightFontColor = "#ffffff";
const borderFontColor = "#00000088";

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
      color: bgColor,
    },
  },
  light: {
    type: "solid",
    data: {
      color: fgColor,
    },
  },
  moveIndicator: {
    color: "#ff770055",
  },
  border: {
    type: "solid",
    data: {
      color: bgColor,
    },
  },
  coords: {
    onLight: darkFontColor,
    onDark: lightFontColor,
    onBorder: borderFontColor,
  },
};

export default style;
