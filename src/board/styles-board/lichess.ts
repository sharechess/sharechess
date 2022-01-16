import { Style } from "../../types";

const style: Style = {
  name: "Lichess",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#b58863",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#f0d9b5",
    },
  },
  moveIndicator: {
    type: "solid",
    data: {
      color: "rgba(155,199,0,0.41)",
    },
  },
  border: null,
  // border: {
  //   type: "solid",
  //   data: {
  //     color: "#896d56",
  //   },
  // },
  coords: {
    lightColor: "#f0d9b5",
    darkColor: "#b58863",
  },
};

export default style;
