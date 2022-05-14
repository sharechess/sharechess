import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/asphalt_paint_yellow.png",
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
    color: "#ff002233",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/asphalt_smooth_dark.jpg",
    },
  },
  coords: {
    onLight: "#262624ee",
    onDark: "#ffb30bdd",
    onBorder: "#ffb30bdd",
  },
  ico: "/textures/asphalt04_ico.png",
};

export default style;
