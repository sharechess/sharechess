import { Style } from "../../types";

const style: Style = {
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#D9DC5C", "#60C945"],
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
      color: "#ffffff7f",
    },
  },
  moveIndicator: {
    color: "#00ffff55",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#B9BC4E", "#50A839"],
    },
  },
  coords: {
    onLight: "#81A33A",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
