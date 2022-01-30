import { Style } from "../../../types";

const style: Style = {
  name: "Sunset",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["hsl(32, 88%, 67%)", "hsl(342, 83%, 57%)"],
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
    data: "#00ffee55",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["hsl(22, 68%, 57%)", "hsl(332, 63%, 47%)"],
    },
  },
  coords: {
    onLight: "hsl(332, 63%, 47%)",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
