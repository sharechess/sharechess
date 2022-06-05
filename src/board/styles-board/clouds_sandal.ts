import { Style } from "../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_sandal.jpg",
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
    color: "#f15e757f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_sandal_bg.jpg",
    },
  },
  coords: {
    onLight: "#a6826a",
    onDark: "#e4d4cd",
    onBorder: "#e4d4cd",
  },
};

export default style;
