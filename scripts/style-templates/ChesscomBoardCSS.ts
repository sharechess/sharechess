import { Style } from "../../src/types";

const ChesscomBoardCSS = (dataURL: string, style: Style) => {
  return `
    @-moz-document domain("chess.com") {
      .board {background-image: ${dataURL} !important}
      .coordinate-light {fill: ${style.coords.onLight} !important}
      .coordinate-dark {fill: ${style.coords.onDark} !important}
      .coords-light {color: ${style.coords.onLight} !important}
      .coords-dark {color: ${style.coords.onDark} !important}
      .highlight, .square.move-square {opacity: 1 !important; background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

export default ChesscomBoardCSS;
