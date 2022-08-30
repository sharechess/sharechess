import { Style } from "../../src/types";

const ChessableBoardCSS = (cssVars: { board: string }, style: Style) => {
  return `
    @-moz-document domain("chessable.com") {
      [class^='chessboard'] > div > div[class^='board'] {
        background-image: ${cssVars.board} !important;
        background-size: cover !important;
      }

      .notation-light {
        color: ${style.coords.onDark} !important;
      }

      .notation-dark {
        color: ${style.coords.onLight} !important;
      }

      .highlight-w,
      .highlight-b {
        background-color: ${style.moveIndicator.color} !important;
      }

      [class*='legal-square-dot'][class*='highlight2'],
      [class*='legal-square-capture'][class*='highlight2'],
      .highlight-legal:not([class*='legal-square-dot']):not([class*='legal-square-capture']) {
        background-color: #00000022 !important;
      }
    }    
  `;
};

export default ChessableBoardCSS;
