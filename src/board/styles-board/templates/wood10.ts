import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/wood10.jpg",
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
    color: "#aaff0055",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood10_bg.jpg",
    },
  },
  coords: {
    onLight: "#ba7f2d",
    onDark: "#eae1a9",
    onBorder: "#eae1a9",
  },
};

export default style;
