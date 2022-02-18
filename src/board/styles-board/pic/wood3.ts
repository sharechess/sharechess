import { Style } from "../../../types";

const style: Style = {
  name: "Wood 3",
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood03.jpg",
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
      src: "/textures/wood03_bg.jpg",
    },
  },
  coords: {
    onLight: "#452b1d",
    onDark: "#c49969",
    onBorder: "#c49969",
  },
  ico: "/textures/wood03_ico.png",
};

export default style;
