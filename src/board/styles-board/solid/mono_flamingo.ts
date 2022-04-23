import { Style } from "../../../types";

const bgColor = "#F65656";
const fgColor = "#FAAAAA";
const darkFontColor = "#BC2D2D";
const lightFontColor = "#ffffff";
const borderFontColor = "#00000099";

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
    type: "color",
    data: "#ffff0033",
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
