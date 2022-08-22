import { PieceType, PieceColor } from "../../src/types";

const ChessGamesCSSEntry = (
  key: string,
  dataURL: string,
  forceStyle = true
) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return `[src$='${color}${piece.toUpperCase()}.png'] {content: ${dataURL}${
    forceStyle ? " !important" : ""
  }}`;
};

const ChessGamesPiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    ChessGamesCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("chessgames.com") {
      [class^='piece-'] {
        filter: ${
          shadows ? "drop-shadow(0.5vh 0.5vh 0.4vh #00000088)" : "none"
        };
      }


      ${entries.join("\n")}
    }
  `;
};

export default ChessGamesPiecesCSS;
