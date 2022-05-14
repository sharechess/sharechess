import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/leather02.jpg",
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
      src: "/textures/leather02_bg.jpg",
    },
  },
  coords: {
    onLight: "#634136",
    onDark: "#e3b4a3",
    onBorder: "#241814ee",
  },
  ico: "/textures/leather02_ico.png",
};

export default style;
