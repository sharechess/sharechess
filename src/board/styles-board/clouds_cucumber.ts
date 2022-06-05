import { Style } from "../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/clouds_cucumber.jpg",
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
    color: "#bff15e7f",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/clouds_cucumber_bg.jpg",
    },
  },
  coords: {
    onLight: "#70a66a",
    onDark: "#d2e4cd",
    onBorder: "#d2e4cd",
  },
};

export default style;
