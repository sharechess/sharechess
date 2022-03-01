import { Style } from "../../../types";

const style: Style = {
  name: "Ukraine",
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
      color: "#3e81c9",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#FFEB82",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#00ff0055",
  },
  border: {
    type: "solid",
    data: {
      color: "#003D7E",
    },
  },
  coords: {
    onLight: "#001D3C",
    onDark: "#fff",
    onBorder: "#FED500",
  },
};

export default style;
