import { Style } from "../../../types";

const style: Style = {
  name: "Standard",
  category: "mono",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#10ad88",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#aae4d7",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#ffff0055",
  },
  border: {
    type: "solid",
    data: {
      color: "#00735a",
    },
  },
  coords: {
    onLight: "#00735a",
    onDark: "#d4fff5",
    onBorder: "#bbfaec",
  },
};

export default style;
