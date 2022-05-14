import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/leather03.jpg",
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
    color: "#00ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/leather03_bg.jpg",
    },
  },
  coords: {
    onLight: "#372f2a",
    onDark: "#c8ac97",
    onBorder: "#dac4b4dd",
  },
  ico: "/textures/leather03_ico.png",
};

export default style;
