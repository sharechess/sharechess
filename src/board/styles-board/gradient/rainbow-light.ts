import { Style } from "../../../types";

const style: Style = {
  name: "Rainbow Light",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "vertical",
      colors: [
        "hsl(350, 100%, 60%)",
        "hsl(35, 100%, 60%)",
        "hsl(80, 100%, 60%)",
        "hsl(125, 100%, 60%)",
        "hsl(215, 100%, 60%)",
        "hsl(260, 100%, 60%)",
        "hsl(305, 100%, 60%)",
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
      color: "#ffffff88",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#00ffff66",
  },
  border: {
    type: "solid",
    data: {
      color: "#bd2f47",
    },
  },
  coords: {
    onLight: "#bd2f47",
    onDark: "#000000bb",
    onBorder: "#ffffffcc",
  },
};

export default style;
