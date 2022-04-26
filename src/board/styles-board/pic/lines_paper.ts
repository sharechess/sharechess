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
    type: "color",
    data: "#55ff0022",
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
  ico: "/textures/paper_ico.png",
};

export default style;
