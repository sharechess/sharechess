import { Style } from "../../../types";

const style: Style = {
  category: "texture",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "image",
    data: {
      src: "/textures/squares/chessception-brown-dark.svg",
    },
  },
  light: {
    type: "image",
    data: {
      src: "/textures/squares/chessception-brown-light.svg",
    },
  },
  moveIndicator: {
    color: "#00ff0033",
  },
  border: {
    type: "solid",
    data: {
      color: "#4F3832",
    },
  },
  coords: {
    onLight: "#7D5A50",
    onDark: "#FCDEC0",
    onBorder: "#FCDEC0",
  },
};

export default style;
