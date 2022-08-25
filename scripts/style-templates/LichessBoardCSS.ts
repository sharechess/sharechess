import { Style } from "../../src/types";

const LichessBoardCSS = (cssVars: { board: string }, style: Style) => {
  return `
    @-moz-document domain("lichess.org") {
      .is2d cg-board {background-image: ${cssVars.board} !important}
      .is2d coords {
        --cg-ccw: ${style.coords.onDark} !important;
        --cg-ccb: ${style.coords.onLight} !important;
      }
      square.last-move {background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

export default LichessBoardCSS;
