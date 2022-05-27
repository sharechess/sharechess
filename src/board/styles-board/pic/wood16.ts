import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood16.jpg",
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
    color: "#aaff0044",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood16_bg.jpg",
    },
  },
  coords: {
    onLight: "#805d3b",
    onDark: "#d9b678",
    onBorder: "#d9b678",
  },
};

export default style;
