import { Style } from "../../../types";

// const rainbowColors = [
//   "#FF0D8B",
//   "#FE3658",
//   "#FD751F",
//   "#FDB400",
//   "#D5DF06",
//   "#65EE56",
//   "#00D7A4",
//   "#019FE1",
//   "#0061FB",
// ];
const rainbowColors = [
  "#FF0D8B",
  "#FD751F",
  "#FDB400",
  "#65EE56",
  "#00D7A4",
  "#0061FB",
];

const style: Style = {
  category: "gradient",
  background: [
    {
      type: "gradient",
      data: {
        dir: "horizontal",
        colors: rainbowColors,
      },
    },
  ],
  dark: {
    type: "solid",
    data: {
      color: "#00000020",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff40",
    },
  },
  moveIndicator: {
    color: "#00ff0055",
  },
  border: [
    {
      type: "gradient",
      data: {
        dir: "horizontal",
        colors: rainbowColors,
      },
    },
    {
      type: "solid",
      data: {
        color: "#00000040",
      },
    },
  ],
  coords: {
    onLight: "#00000077",
    onDark: "#ffffffaa",
    onBorder: "#fff",
  },
};

export default style;
