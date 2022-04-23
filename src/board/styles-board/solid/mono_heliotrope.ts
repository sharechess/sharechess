import { Style } from "../../../types";

const bgColor = "#C84CF3";
const fgColor = "#E3A5F9";
const darkFontColor = "#881EAC";
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
    type: "hueShift",
    data: 30,
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
