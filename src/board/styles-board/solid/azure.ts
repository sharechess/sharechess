import { Style } from "../../../types";

const style: Style = {
  name: "Azure",
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
      color: "#277ECE",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#7DD3E2",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#ff000044",
  },
  border: {
    type: "solid",
    data: {
      color: "#0F508C",
    },
  },
  coords: {
    onLight: "#0F508C",
    onDark: "#ACE3EC",
    onBorder: "#ACE3EC",
  },
};

export default style;
