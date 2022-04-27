import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "image",
    data: {
      src: "/textures/squares/dark-lines.svg",
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
    type: "solid",
    data: {
      color: "#EDEDED",
    },
  },
  coords: {
    onLight: "#0000007f",
    onDark: "#00000099",
    onBorder: "#00000099",
  },
};

export default style;
