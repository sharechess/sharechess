import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/asphalt_paint_white.png",
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
    color: "#0055ff33",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/asphalt_smooth_light.jpg",
    },
  },
  coords: {
    onLight: "#303136ee",
    onDark: "#ffffffdd",
    onBorder: "#ffffffdd",
  },
  ico: "/textures/asphalt03_ico.png",
};

export default style;
