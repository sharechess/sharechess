import { Style } from "../../../types";

const style: Style = {
  name: "Calm",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#96c93d", "#00b09b"],
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "rgba(0, 0, 0, 0)",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "rgba(255, 255, 255, 0.5)",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#0055ff33",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#65a32e", "#007a80"],
    },
  },
  coords: {
    onLight: "rgba(0, 0, 0, 0.5)",
    onDark: "rgba(255, 255, 255, 0.9)",
    onBorder: "rgba(255, 255, 255, 0.9)",
  },
};

export default style;
