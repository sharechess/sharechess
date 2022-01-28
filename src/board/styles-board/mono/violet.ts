import { Style } from "../../../types";

const style: Style = {
  name: "Violet",
  category: "mono",
  background: {
    type: "solid",
    data: {
      color: "#361b52",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#5d3e7d",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#cea9f5",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: 60,
  },
  border: {
    type: "solid",
    data: {
      color: "#271936",
    },
  },
  coords: {
    onLight: "#271936",
    onDark: "#271936",
    onBorder: "#cea9f5",
  },
};

export default style;
