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
      src: "/textures/squares/chessception-violet-dark.svg",
    },
  },
  light: {
    type: "image",
    data: {
      src: "/textures/squares/chessception-violet-light.svg",
    },
  },
  moveIndicator: {
    color: "#55ff0033",
  },
  border: {
    type: "solid",
    data: {
      color: "#35458B",
    },
  },
  coords: {
    onLight: "#6777BC",
    onDark: "#F4EEFF",
    onBorder: "#F4EEFF",
  },
};

export default style;
