import { Style } from "../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/wood12.jpg",
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
    color: "#aaff0055",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood12_bg.jpg",
    },
  },
  coords: {
    onLight: "#a16b4b",
    onDark: "#ebd2aa",
    onBorder: "#ebd2aa",
  },
};

export default style;
