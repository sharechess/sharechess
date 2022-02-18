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
    data: "#ff007733",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood02_bg.jpg",
    },
  },
  coords: {
    onLight: "#773e2d",
    onDark: "#d6b29a",
    onBorder: "#d6b29a",
  },
  ico: "/textures/wood02_ico.png",
};

export default style;
