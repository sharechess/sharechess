import { Style } from "../../../types";

const style: Style = {
  name: "Wood 1",
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood01.jpg",
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
      src: "/textures/wood01_bg.jpg",
    },
  },
  coords: {
    onLight: "#5a4334",
    onDark: "#c2a078",
    onBorder: "#c2a078",
  },
  ico: "/textures/wood01_ico.png",
};

export default style;
