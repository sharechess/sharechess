import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood07.jpg",
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
      src: "/textures/wood07_bg.jpg",
    },
  },
  coords: {
    onLight: "#734926",
    onDark: "#cab99b",
    onBorder: "#cab99b",
  },
  ico: "/textures/wood07_ico.png",
};

export default style;
