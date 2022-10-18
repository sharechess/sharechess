import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/wood13.jpg",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  moveIndicator: {
    color: "#aaff0033",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood13_bg.jpg",
    },
  },
  coords: {
    onLight: "#3b1b11",
    onDark: "#af8457",
    onBorder: "#af8457",
  },
};

export default style;
