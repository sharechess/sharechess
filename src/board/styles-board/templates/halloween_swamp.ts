import { Style } from "../../../types";

const style: Style = {
  category: "seasonal",
  background: {
    type: "image",
    data: {
      src: "/textures/halloween2.png",
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
    color: "#5A006940",
  },
  border: {
    type: "solid",
    data: {
      color: "#3d4439",
    },
  },
  coords: {
    onLight: "#5a6453",
    onDark: "#7e8d6a",
    onBorder: "#96a87e",
  },
};

export default style;
