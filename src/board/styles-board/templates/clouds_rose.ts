import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_rose.jpg",
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
    color: "#f15ee37f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_rose_bg.jpg",
    },
  },
  coords: {
    onLight: "#a66a7f",
    onDark: "#e4cdd7",
    onBorder: "#e4cdd7",
  },
};

export default style;
