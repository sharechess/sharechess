import { Style } from "../../types";

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
  dark: [
    {
      type: "solid",
      data: {
        color: "#00000099",
      },
    },
    {
      type: "image",
      data: { src: "/textures/squares/noise.png" },
    },
  ],
  light: {
    type: "solid",
    data: {
      color: "#00000077",
    },
  },
  moveIndicator: {
    color: "#ff00ff33",
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
        color: "#000000cc",
      },
    },
  ],
  coords: {
    onLight: "#00000077",
    onDark: "#ffffffaa",
    onBorder: "#ffffffaa",
  },
};

export default style;
