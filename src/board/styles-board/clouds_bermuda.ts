import { Style } from "../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_bermuda.jpg",
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
    color: "#5ef1da7f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_bermuda_bg.jpg",
    },
  },
  coords: {
    onLight: "#6a8ea6",
    onDark: "#cddde4",
    onBorder: "#cddde4",
  },
};

export default style;
