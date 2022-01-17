import { Style } from "../../types";

const style: Style = {
  name: "Kittens",
  background: {
    type: "image",
    data: {
      src: "https://placekitten.com/720/720",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#00000055",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff55",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#ffff0055",
  },
  border: {
    type: "solid",
    data: {
      color: "#444",
    },
  },
  coords: {
    onLight: "#333",
    onDark: "#eee",
    onBorder: "#eee",
  },
};

export default style;
