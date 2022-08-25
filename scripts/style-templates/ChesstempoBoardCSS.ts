import { Style } from "../../src/types";

const ChesstempoBoardCSS = (
  cssVars: { board: string; borderImg: string | null; borderColor: string },
  style: Style
) => {
  return `
    @-moz-document domain("chesstempo.com") {
      .ct-square-dark, .ct-square-light, .ct-board-row {
        background: none !important;
      }
      
      .ct-board-squares {
        background-image: ${cssVars.board} !important;
        background-size: cover !important;
      }
      
      .ct-board-inner-holder {
        background-color: ${cssVars.borderColor} !important;
        background-image: ${cssVars.borderImg ?? "none"} !important;
        background-size: cover !important;
      }
      
      .ct-coord-row, .ct-coord-column {
        fill: ${style.coords.onBorder} !important;
      }
      
      .ct-promotion-piece-holder {
        background-color: ${cssVars.borderColor} !important;
      }
      
      .ct-promotion-piece-holder:hover {
        background-color: ${cssVars.borderColor} !important;
        background-image: linear-gradient(#FFFFFF55, #FFFFFF55) !important;
      }
      
      .ct-promotion-piece-holder :hover {
        background-color: transparent !important;
      }
  }
  `;
};

export default ChesstempoBoardCSS;
