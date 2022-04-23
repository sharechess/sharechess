import { Style } from "../../../types";

const style: Style = {
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#00c4a0", "#096fe0"],
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
    type: "color",
    data: "#3cff0055",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#009c7f", "#0052ad"],
    },
  },
  coords: {
    onLight: "#007795",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
