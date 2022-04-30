import { Style } from "../../../types";

const bgColor = "#3C85F4";
const fgColor = "#9DC2F9";
const darkFontColor = "#1451AE";
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
    hueShift: 0,
    color: "#55ff0055",
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
