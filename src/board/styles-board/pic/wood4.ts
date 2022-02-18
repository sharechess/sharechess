import { Style } from "../../../types";

const style: Style = {
  name: "Wood 4",
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood04.jpg",
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
      src: "/textures/wood04_bg.jpg",
    },
  },
  coords: {
    onLight: "#8b674c",
    onDark: "#ebdbc8",
    onBorder: "#e7cbac",
  },
  ico: "/textures/wood04_ico.png",
};

export default style;
