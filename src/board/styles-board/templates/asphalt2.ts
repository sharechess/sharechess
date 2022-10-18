import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/asphalt_paint_yellow2.png",
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
      src: "/textures/asphalt_rough_dark.jpg",
    },
  },
  coords: {
    onLight: "#262624ee",
    onDark: "#ffb30bee",
    onBorder: "#ffb30bee",
  },
};

export default style;
