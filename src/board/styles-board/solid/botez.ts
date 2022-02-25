import { Style } from "../../../types";

const style: Style = {
  name: "Botez",
  category: "solid",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#8877b6",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#efefef",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#7dacc97f",
  },
  border: {
    type: "solid",
    data: {
      color: "#554973",
    },
  },
  coords: {
    onLight: "#554973",
    onDark: "#f2f2f2",
    onBorder: "#efefef",
  },
};

export default style;
