import { Style } from "../../src/types";

const OpeningTreeBoardCSS = (cssVars: { board: string }, style: Style) => {
  return `
    @-moz-document domain("openingtree.com") {
      .cg-wrap {
        background-image: ${cssVars.board} !important;
        background-size: cover !important;
        filter: none !important;
      }
      square.last-move {background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

export default OpeningTreeBoardCSS;
