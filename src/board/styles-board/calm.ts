import { Style } from "../../types";

const style: Style = {
  name: "Calm",
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
    type: "solid",
    data: {
      color: "#ff00dd44",
    },
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#70982b", "#008b7a"],
    },
  },
  coords: {
    lightColor: "rgba(255, 255, 255, 0.9)",
    darkColor: "rgba(255, 255, 255, 0.9)",
  },
};

export default style;
