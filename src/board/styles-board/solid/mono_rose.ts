import { Style } from "../../../types";

const bgColor = "#FB6299";
const fgColor = "#FDB0CC";
const darkFontColor = "#C8215D";
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
    color: "#ffff0033",
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
