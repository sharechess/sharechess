import { Style } from "../../types";

const style: Style = {
  name: "Peach",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#e54b4b",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffa987",
    },
  },
  moveIndicator: {
    type: "solid",
    data: {
      // color: "#0055ff77",
      color: "transparent",
    },
  },
  border: null,
  coords: {
    lightColor: "#ffa987",
    darkColor: "#e54b4b",
  },
};

export default style;
