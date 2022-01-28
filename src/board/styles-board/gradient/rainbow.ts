import { Style } from "../../../types";

const style: Style = {
  name: "Rainbow",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "vertical",
      colors: [
        "hsl(350, 70%, 50%)",
        "hsl(35, 70%, 50%)",
        "hsl(80, 70%, 50%)",
        "hsl(125, 70%, 50%)",
        "hsl(215, 70%, 50%)",
        "hsl(260, 70%, 50%)",
        "hsl(305, 70%, 50%)",
      ],
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#ffffff22",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff99",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#00ffff66",
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
    onBorder: "#ffffffbb",
  },
};

export default style;
