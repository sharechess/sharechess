import { Style } from "../../../types";

const style: Style = {
  name: "Contrast C",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "vertical",
      colors: ["#FF8D4D", "#914DFF"],
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
      colors: ["#E8702C", "#6334B0"],
    },
  },
  coords: {
    onLight: "#00000077",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
