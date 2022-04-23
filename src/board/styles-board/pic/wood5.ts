import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood05.jpg",
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
    type: "color",
    data: "#55ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood05_bg.jpg",
    },
  },
  coords: {
    onLight: "#8f653d",
    onDark: "#e3ceb5",
    onBorder: "#dcc2a3",
  },
  ico: "/textures/wood05_ico.png",
};

export default style;
