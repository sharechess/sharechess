import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/wood02.jpg",
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
    color: "#55ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood02_bg.jpg",
    },
  },
  coords: {
    onLight: "#704642",
    onDark: "#e1c1b7",
    onBorder: "#d9b1a5",
  },
};

export default style;
