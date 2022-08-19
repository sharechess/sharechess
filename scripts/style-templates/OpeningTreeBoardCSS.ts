import { Style } from "../../src/types";

const OpeningTreeBoardCSS = (dataURL: string, style: Style) => {
  return `
    @-moz-document domain("openingtree.com") {
      .cg-wrap {background-image: ${dataURL} !important}
      square.last-move {background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

export default OpeningTreeBoardCSS;
