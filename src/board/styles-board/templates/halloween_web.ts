import { Style } from "../../../types";

const style: Style = {
  category: "seasonal",
  background: {
    type: "image",
    data: {
      src: "/textures/halloween.png",
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
    color: "#00690B40",
  },
  border: {
    type: "solid",
    data: {
      color: "#2A1F2E",
    },
  },
  coords: {
    onLight: "#402F46",
    onDark: "#574162",
    onBorder: "#755784",
  },
};

export default style;
