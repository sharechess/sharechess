import { Style } from "../../../types";

const style: Style = {
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "vertical",
      colors: ["#61c43f", "#864DFF"],
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
      color: "#ffffff66",
    },
  },
  moveIndicator: {
    hueShift: 0,
    color: "#ffaa0055",
  },
  border: {
    type: "gradient",
    data: {
      dir: "vertical",
      colors: ["#559a3c", "#6333cc"],
    },
  },
  coords: {
    onLight: "#00000077",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
