import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";

const ChesstempoCSSEntry = (
  key: string,
  dataURL: string,
  forceStyle = true
) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return `.ct-piece-${pieces.colors[color]}${pieces.names[piece]} {
    background-image: ${dataURL}${forceStyle ? " !important" : ""};
    background-size: cover !important;
  }`;
};

const ChesstempoPiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    ChesstempoCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("chesstempo.com") {
      .ct-pieceClass  {
        filter: ${
          shadows ? "drop-shadow(0.7vh 0.7vh 0.5vh #00000088)" : "none"
        };
      }

      ${entries.join("\n")}
    }
  `;
};

export default ChesstempoPiecesCSS;
