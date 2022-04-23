import { Style } from "../../../types";

const style: Style = {
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
    data: "#ff007733",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood04_bg.jpg",
    },
  },
  coords: {
    onLight: "#9e543b",
    onDark: "#e3c7b5",
    onBorder: "#ddbba4",
  },
  ico: "/textures/wood04_ico.png",
};

export default style;
