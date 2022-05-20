import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/leather01.jpg",
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
    color: "#00ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/leather01_bg.jpg",
    },
  },
  coords: {
    onLight: "#3d2b25",
    onDark: "#d1a090",
    onBorder: "#e0bbafdd",
  },
};

export default style;
