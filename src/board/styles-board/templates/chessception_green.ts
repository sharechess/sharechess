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
      src: "/textures/squares/chessception-green-dark.svg",
    },
  },
  light: {
    type: "image",
    data: {
      src: "/textures/squares/chessception-green-light.svg",
    },
  },
  moveIndicator: {
    color: "#ffff0033",
  },
  border: {
    type: "solid",
    data: {
      color: "#466250",
    },
  },
  coords: {
    onLight: "#699462",
    onDark: "#FEFFDE",
    onBorder: "#FEFFDE",
  },
};

export default style;
