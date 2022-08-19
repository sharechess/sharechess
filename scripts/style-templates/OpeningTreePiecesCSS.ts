import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";

const OpeningTreeCSSEntry = (
  key: string,
  dataURL: string,
  forceStyle = true
) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return `.${pieces.names[piece]}.${
    pieces.colors[color]
  } {background-image: ${dataURL}${forceStyle ? " !important" : ""}}`;
};

const OpeningTreePiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    OpeningTreeCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("openingtree.com") {
      piece {
        filter: ${
          shadows ? "drop-shadow(0.5vh 0.5vh 0.4vh #00000088)" : "none"
        };
      }

      ${entries.join("\n")}
    }
  `;
};

export default OpeningTreePiecesCSS;
