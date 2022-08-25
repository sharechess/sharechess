import { Style } from "../../src/types";

const OpeningTreeBoardCSS = (cssVars: { board: string }, style: Style) => {
  return `
    @-moz-document domain("chessgames.com") {
      [class^='board-']  {
        background-image: ${cssVars.board} !important;
        background-size: cover !important;
      }
        
      [class^='square-'] {
        background: none !important;
      }
        
      [class^='square-'][class*='white-'] {
        color: ${style.coords.onLight} !important;
      }
        
      [class^='square-'][class*='black-'] {
        color: ${style.coords.onDark} !important;
      }
        
      [class*='highlight1'], [class*='highlight2'] {
        background: ${style.moveIndicator.color} !important;
        box-shadow: none;
      }
    }
  `;
};

export default OpeningTreeBoardCSS;
