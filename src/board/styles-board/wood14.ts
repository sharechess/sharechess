import { Style } from "../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood14.jpg",
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
      src: "/textures/wood14_bg.jpg",
    },
  },
  coords: {
    onLight: "#88412a",
    onDark: "#fee9b8",
    onBorder: "#fee9b8",
  },
};

export default style;
