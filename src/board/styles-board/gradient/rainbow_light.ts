import { Style } from "../../../types";

const rainbowColors = [
  "#ff75bc",
  "#fe9aab",
  "#feb486",
  "#ffd466",
  "#f2fb51",
  "#bbf8b5",
  "#3dffd2",
  "#48c8fe",
  "#619eff",
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
