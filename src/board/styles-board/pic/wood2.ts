import { Style } from "../../../types";

const style: Style = {
  name: "Wood 2",
  category: "pic",
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
    type: "color",
    data: "#55ff0022",
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
  ico: "/textures/wood02_ico.png",
};

export default style;
