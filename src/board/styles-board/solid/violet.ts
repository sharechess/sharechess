import { Style } from "../../../types";

const style: Style = {
  name: "Violet",
  category: "solid",
  background: {
    type: "solid",
    data: {
      color: "#361b52",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#7b4fa8",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#CB95CB",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -60,
  },
  border: {
    type: "solid",
    data: {
      color: "#50346e",
    },
  },
  coords: {
    onLight: "#50346e",
    onDark: "#eedeff",
    onBorder: "#e2c7ff",
  },
};

export default style;
