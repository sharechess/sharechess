import { Style } from "../../src/types";

const AimchessBoardCSS = (
  cssVars: { board: string; borderImg: string | null; borderColor: string },
  style: Style
) => {
  return `
    @-moz-document domain("aimchess.com") {
      .board .square.white,
      .board .square.black {
          fill: transparent !important;
      }
      .board .border {
          fill: transparent !important;
          stroke-width: 0 !important;
      }
      .board .border-inner {
          stroke-width: 0 !important;
      }
      .cm-chessboard {
          background-color: ${cssVars.borderColor} !important;
          background-image: ${cssVars.board}, ${cssVars.borderImg ?? "none"};
          background-size: 92%, 100%;
          background-repeat: no-repeat;
          background-position: center;
      }
      .cm-chessboard .coordinate {
          fill: ${style.coords.onBorder} !important;
      }
    }
  `;
};

export default AimchessBoardCSS;
