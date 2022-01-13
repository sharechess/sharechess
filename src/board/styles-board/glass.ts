import { Style } from "../../types";

const style: Style = {
  name: "Glass",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#ffffff33",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff99",
    },
  },
  moveIndicator: {
    type: "solid",
    data: {
      color: "#0055ff77",
    },
  },
  border: {
    type: "solid",
    data: {
      color: "#ffffff66",
    },
  },
  coords: {
    lightColor: "#222",
    darkColor: "#222",
  },
};

export default style;
