import { Style } from "../../types";

const style: Style = {
  name: "Calm",
  // background: {
  //   type: "solid",
  //   data: {
  //     color: "transparent",
  //   },
  // },
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
    data: "#ee59ff55",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#70982b", "#008b7a"],
    },
  },
  coords: {
    onLight: "rgba(0, 0, 0, 0.5)",
    onDark: "rgba(255, 255, 255, 0.9)",
    onBorder: "rgba(255, 255, 255, 0.9)",
  },
};

export default style;
