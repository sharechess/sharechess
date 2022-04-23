import { Style } from "../../../types";

const bgColor = "#DF8F6C";
const fgColor = "#EFC7B5";
const darkFontColor = "#A56A51";
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
    data: "#00ff0033",
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
