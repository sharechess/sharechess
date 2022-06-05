import { Style } from "../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_wisteria.jpg",
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
    color: "#915ef17f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_wisteria_bg.jpg",
    },
  },
  coords: {
    onLight: "#a06aa6",
    onDark: "#e0cde4",
    onBorder: "#e0cde4",
  },
};

export default style;
