import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/grass01.jpg",
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
    color: "#0099bb22",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/grass01_bg.jpg",
    },
  },
  coords: {
    onLight: "#090f0299",
    onDark: "#d3ff9e99",
    onBorder: "#d3ff9e99",
  },
  ico: "/textures/grass01_ico.png",
};

export default style;
