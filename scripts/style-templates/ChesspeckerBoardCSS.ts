import { Style } from "../../src/types";

const ChesspeckerBoardCSS = (cssVars: { board: string }, style: Style) => {
  return `
    @-moz-document domain("chesspecker.com") {
      cg-board {
        background-image: ${cssVars.board} !important;
      }

      .ranks coord:nth-child(odd), .files coord:nth-child(even) {
        color: ${style.coords.onLight} !important;
      }

      .ranks coord:nth-child(even), .files coord:nth-child(odd) {
        color: ${style.coords.onDark} !important;
      }

      square.last-move {
        background-color: ${style.moveIndicator.color} !important;
      }
    }

    
  `;
};

export default ChesspeckerBoardCSS;
