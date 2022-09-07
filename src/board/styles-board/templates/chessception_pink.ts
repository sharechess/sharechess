import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "image",
    data: {
      src: "/textures/squares/chessception-pink-dark.svg",
    },
  },
  light: {
    type: "image",
    data: {
      src: "/textures/squares/chessception-pink-light.svg",
    },
  },
  moveIndicator: {
    color: "#0000ff33",
  },
  border: {
    type: "solid",
    data: {
      color: "#A03956",
    },
  },
  coords: {
    onLight: "#C86B85",
    onDark: "#F5EEE6",
    onBorder: "#F5EEE6",
  },
};

export default style;
