import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/wood03.jpg",
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
    color: "#ff007733",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood03_bg.jpg",
    },
  },
  coords: {
    onLight: "#986738",
    onDark: "#e2d3b6",
    onBorder: "#dac7a0",
  },
};

export default style;
