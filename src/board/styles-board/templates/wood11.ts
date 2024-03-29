import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/wood11.jpg",
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
    color: "#00ff0033",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood11_bg.jpg",
    },
  },
  coords: {
    onLight: "#3c2f26",
    onDark: "#b2825b",
    onBorder: "#b2825b",
  },
};

export default style;
