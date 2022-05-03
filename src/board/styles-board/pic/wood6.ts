import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood06.jpg",
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
      src: "/textures/wood06_bg.jpg",
    },
  },
  coords: {
    onLight: "#865946",
    onDark: "#dfc8b9",
    onBorder: "#d7bba8",
  },
  ico: "/textures/wood06_ico.png",
};

export default style;
