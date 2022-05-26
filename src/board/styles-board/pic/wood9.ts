import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood09.jpg",
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
    color: "#ffff0055",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood09_bg.jpg",
    },
  },
  coords: {
    onLight: "#bc6337",
    onDark: "#e9d1a9",
    onBorder: "#e9d1a9",
  },
};

export default style;
