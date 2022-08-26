import { Style } from "../../src/types";

const ListudyBoardCSS = (cssVars: { board: string }, style: Style) => {
  return `
    @-moz-document domain("listudy.org") {
      .chessboard {
        background-image: ${cssVars.board} !important;
        background-size: cover !important;
      }

      
      square.last-move {background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

export default ListudyBoardCSS;
