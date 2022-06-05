import { Style } from "../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_acapulco.jpg",
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
    color: "#5ef16c7f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_acapulco_bg.jpg",
    },
  },
  coords: {
    onLight: "#6aa691",
    onDark: "#cde4da",
    onBorder: "#cde4da",
  },
};

export default style;
