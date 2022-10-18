import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/asphalt_paint_white2.png",
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
      src: "/textures/asphalt_rough_light.jpg",
    },
  },
  coords: {
    onLight: "#090f0299",
    onDark: "#ffffffee",
    onBorder: "#ffffffee",
  },
};

export default style;
