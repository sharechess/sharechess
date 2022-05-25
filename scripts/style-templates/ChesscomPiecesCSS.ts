import { PieceType, PieceColor } from "../../src/types";

const ChesscomCSSEntry = (key: string, dataURL: string, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];
  const selector = `${color}${piece}`;

  return `.piece.${selector}, .promotion-piece.${selector}, .piece[style*="${selector}.png"], .promotion-piece[style*="${selector}.png"] {background-image: ${dataURL}${
    forceStyle ? " !important" : ""
  }}`;
};

const ChesscomPiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    ChesscomCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("chess.com") {
      .board-layout-main .piece {
        filter: ${
          shadows ? "drop-shadow(0.7vh 0.7vh 0.5vh #00000088)" : "none"
        };
      }

      ${entries.join("\n")}
    }
  `;
};

export default ChesscomPiecesCSS;
