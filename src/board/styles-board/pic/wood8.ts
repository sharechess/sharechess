import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood08.jpg",
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
      src: "/textures/wood08_bg.jpg",
    },
  },
  coords: {
    onLight: "#723627",
    onDark: "#cbad9a",
    onBorder: "#cbad9a",
  },
  ico: "/textures/wood08_ico.png",
};

export default style;
