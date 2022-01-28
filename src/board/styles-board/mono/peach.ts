import { Style } from "../../../types";

const style: Style = {
  name: "Peach",
  category: "mono",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#e54b4b",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffa987",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 330,
  },
  border: {
    type: "solid",
    data: {
      color: "#962c2c",
    },
  },
  coords: {
    onLight: "#e54b4b",
    onDark: "#ffa987",
    onBorder: "#ffa987",
  },
};

export default style;
