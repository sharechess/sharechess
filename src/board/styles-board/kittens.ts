import { Style } from "../../types";

const style: Style = {
  name: "Kittens",
  background: {
    type: "image",
    data: {
      src: "https://placekitten.com/1024/1024",
    },
  },
  dark: {
    type: "image",
    data: {
      src: "https://placekitten.com/128/128",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  moveIndicator: {
    type: "solid",
    data: {
      color: "#0055ff77",
    },
  },
  border: {
    type: "solid",
    data: {
      color: "#444",
    },
  },
  coords: {
    lightColor: "#eee",
    darkColor: "#eee",
  },
};

export default style;
