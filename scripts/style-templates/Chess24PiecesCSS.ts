import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";

const Chess24CSSEntry = (key: string, dataURL: string, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return `img.piece.${
    pieces.colors[color]
  }[src$='${piece}.png'] {content: ${dataURL}${
    forceStyle ? " !important" : ""
  }}`;
};

const Chess24PiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    Chess24CSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("chess24.com") {
      img.piece {
        filter: ${shadows ? "drop-shadow(0.3vh 0.3vh 0.2vh #00000088)" : "none"}
      }

      ${entries.join("\n")}
    }
  `;
};

export default Chess24PiecesCSS;
