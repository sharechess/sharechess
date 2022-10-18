import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_gimblet.jpg",
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
    color: "#f1b55e7f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_gimblet_bg.jpg",
    },
  },
  coords: {
    onLight: "#9da66a",
    onDark: "#e3e4cd",
    onBorder: "#e3e4cd",
  },
};

export default style;
