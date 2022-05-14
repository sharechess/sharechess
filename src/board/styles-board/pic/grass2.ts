import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/grass02.jpg",
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
    color: "#0099bb22",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/grass02_bg.jpg",
    },
  },
  coords: {
    onLight: "#090f0288",
    onDark: "#d3ff9ecc",
    onBorder: "#d3ff9ecc",
  },
  ico: "/textures/grass02_ico.png",
};

export default style;
