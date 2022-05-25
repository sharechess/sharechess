import { Style } from "../../src/types";

const LichessBoardCSS = (dataURL: string, style: Style) => {
  return `
    @-moz-document domain("lichess.org") {
      .is2d cg-board {background-image: ${dataURL} !important}
      .is2d coords {
        --cg-ccw: ${style.coords.onDark} !important;
        --cg-ccb: ${style.coords.onLight} !important;
      }
      square.last-move {background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

export default LichessBoardCSS;
