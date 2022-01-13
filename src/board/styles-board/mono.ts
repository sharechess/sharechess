import { Style } from "../../types";

const style: Style = {
  name: "Mono",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#bbb",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#eee",
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
      color: "#444",
    },
  },
  coords: {
    lightColor: "#eee",
    darkColor: "#eee",
  },
};

export default style;
