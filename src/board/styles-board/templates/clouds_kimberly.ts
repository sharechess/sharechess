import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_kimberly.jpg",
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
    color: "#5e9af17f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_kimberly_bg.jpg",
    },
  },
  coords: {
    onLight: "#736aa6",
    onDark: "#cecde4",
    onBorder: "#cecde4",
  },
};

export default style;
