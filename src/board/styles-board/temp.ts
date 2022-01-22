import { Style } from "../../types";

const style: Style = {
  name: "Temp",
  background: {
    type: "gradient",
    data: {
      dir: "radial",
      colors: ["#ff00ff", "#00ffff"],
    },
  },
  dark: {
    type: "image",
    data: {
      src: "https://placekitten.com/1024/1024",
    },
  },
  light: {
    type: "gradient",
    data: {
      dir: "radial",
      colors: ["#ffffff11", "#ffff0099", "#ffff0099"],
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 70,
  },
  border: {
    type: "solid",
    data: {
      color: "#2d3923",
    },
  },
  coords: {
    onLight: "#4d7a26",
    onDark: "#ffffc4",
    onBorder: "#ececa4",
  },
};

export default style;
