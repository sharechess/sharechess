import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";
import { capitalizeFirstLetter } from "../utils/text";

const ChessbaseCSSEntry = (key: string, dataURL: string, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];
  const pieceNameCap = capitalizeFirstLetter(pieces.names[piece]);
  const colorName = pieces.colors[color];
  const colorNameCap = capitalizeFirstLetter(colorName);

  return `
    div[class*='${colorName}${pieceNameCap}'] {
      background-image: ${dataURL}${forceStyle ? " !important" : ""};
    }

    img[alt='${colorNameCap} ${pieceNameCap}'] {
      content:  ${dataURL}${forceStyle ? " !important" : ""};
    }
  `;
};

const ChessbasePiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    ChessbaseCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("chessbase.com") {
      [class^="CBChessPiece_piece"] {
        filter: ${
          shadows ? "drop-shadow(0.5vh 0.5vh 0.4vh #00000088)" : "none"
        };
      }

      ${entries.join("\n")}
    }
  `;
};

export default ChessbasePiecesCSS;
