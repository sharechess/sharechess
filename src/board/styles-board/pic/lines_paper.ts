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
      src: "/textures/squares/dark-lines2.svg",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  moveIndicator: {
    hueShift: 0,
    color: "#55ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/paper.jpg",
    },
  },
  coords: {
    onLight: "#0000007f",
    onDark: "#000000bb",
    onBorder: "#000000bb",
  },
  ico: "/textures/paper_ico.png",
};

export default style;
