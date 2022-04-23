import { Style } from "../../../types";

const style: Style = {
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#F5CB61", "#F58D61"],
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
    data: "#00ffee55",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#D1AC4F", "#D07852"],
    },
  },
  coords: {
    onLight: "#B2793C",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;
