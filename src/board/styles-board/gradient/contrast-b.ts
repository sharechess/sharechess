import { Style } from "../../../types";

const style: Style = {
  name: "Contrast B",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "vertical",
      colors: ["#FF4DA6", "#4D74FF"],
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
    type: "color",
    data: "#3cff0055",
  },
  border: {
    type: "gradient",
    data: {
      dir: "vertical",
      colors: ["#BB3D7C", "#3653BB"],
    },
  },
  coords: {
    onLight: "#00000077",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
