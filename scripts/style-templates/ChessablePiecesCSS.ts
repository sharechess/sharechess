import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";

const uniqueSrcEnding: { [key: string]: string } = {
  wP: "caMAAAAAElFTkSuQmCC",
  wN: "AAAAABJRU5ErkJggg==",
  wB: "5oAAAAASUVORK5CYII=",
  wR: "SLxAAAAAElFTkSuQmCC",
  wQ: "9TGAAAAAElFTkSuQmCC",
  wK: "P9HAAAAAElFTkSuQmCC",
  bP: "25GAAAAAElFTkSuQmCC",
  bN: "QAAAABJRU5ErkJggg==",
  bB: "UM2AAAAAElFTkSuQmCC",
  bR: "MJoAAAAAElFTkSuQmCC",
  bQ: "wAAAABJRU5ErkJggg==",
  bK: "CLzAAAAAElFTkSuQmCC",
};

const ChessableCSSEntry = (key: string, dataURL: string, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];
  const selector = `${color}${piece.toUpperCase()}`;

  return `
    svg[data-piece="${selector}"] {
      background-image: ${dataURL}${forceStyle ? " !important" : ""}
    }

    img[data-piece="${selector}"],
    img[src$='${uniqueSrcEnding[selector]}'][data-piece='wP'] {
      content: ${dataURL} !important;
    }
  `;
};

const ChessablePiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    ChessableCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("chessable.com") {
      svg[class*="piece-"] {
        background-position: center;
        background-size: contain;
        filter: ${
          shadows ? "drop-shadow(0.3vh 0.3vh 0.2vh #00000088)" : "none"
        };
      }

      .promoteChoice#promoteQueen {
        content: var(--sharechess-qw-url);
      }
      
      .promoteChoice#promoteQueen[src*="bQ.png"] {
        content: var(--sharechess-qb-url);
      }
      
      .promoteChoice#promoteRook {
          content: var(--sharechess-rw-url);
      }
      
      .promoteChoice#promoteRook[src*="bR.png"] {
        content: var(--sharechess-rb-url);
      }
      
      .promoteChoice#promoteKnight {
          content: var(--sharechess-nw-url);
      }
      
      .promoteChoice#promoteKnight[src*="bN.png"] {
        content: var(--sharechess-nb-url);
      }
      
      .promoteChoice#promoteBishop {
          content: var(--sharechess-bw-url);
      }

      .promoteChoice#promoteBishop[src*="bB.png"] {
        content: var(--sharechess-bb-url);
      }

      svg[class*="piece-"] * {
        display: none;
      }

      ${entries.join("\n")}
    }
  `;
};

export default ChessablePiecesCSS;
