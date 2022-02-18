import { Style } from "../../../types";

const style: Style = {
  name: "Wood 1",
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood01.jpg",
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
    type: "color",
    data: "#55ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood01_bg.jpg",
    },
  },
  coords: {
    onLight: "#333",
    onDark: "#eee",
    onBorder: "#ffffffbb",
  },
};

export default style;
