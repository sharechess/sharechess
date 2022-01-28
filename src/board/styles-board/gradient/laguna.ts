import { Style } from "../../../types";

const style: Style = {
  name: "Laguna",
  category: "gradient",
  background: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#3df5a7", "#096fe0"],
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff55",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#3cff0055",
  },
  border: {
    type: "gradient",
    data: {
      dir: "diagonal-top",
      colors: ["#00b568", "#0052ad"],
    },
  },
  coords: {
    onLight: "#006f75",
    onDark: "#fff",
    onBorder: "#fff",
  },
};

export default style;

// background-image: linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );
