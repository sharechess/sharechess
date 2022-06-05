import { Style } from "../../types";

const style: Style = {
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
    color: "#55ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/wood01_bg.jpg",
    },
  },
  coords: {
    onLight: "#604939",
    onDark: "#e1d0b7",
    onBorder: "#dac4a4",
  },
};

export default style;
