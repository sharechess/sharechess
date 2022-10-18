import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "image",
    data: {
      src: "/textures/wood15.jpg",
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
    color: "#aaff0044",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood15_bg.jpg",
    },
  },
  coords: {
    onLight: "#9d7655",
    onDark: "#fbdfb1",
    onBorder: "#fbdfb1",
  },
};

export default style;
