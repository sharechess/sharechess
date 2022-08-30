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
    color: "#1c67c933",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/paper.jpg",
    },
  },
  coords: {
    onLight: "#0000007f",
    onDark: "#00000099",
    onBorder: "#00000099",
  },
};

export default style;
