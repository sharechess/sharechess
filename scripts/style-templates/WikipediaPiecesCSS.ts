import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";

const WikipediaCSSEntry = (key: string, dataURL: string, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return `.chess-board img[alt$='${pieces.colors[color]} ${
    pieces.names[piece]
  }'] {content: ${dataURL}${forceStyle ? " !important" : ""}}`;
};

const WikipediaPiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    WikipediaCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("wikipedia.org") {
      .chess-board > div> img {
        filter: ${
          shadows ? "drop-shadow(0.2vh 0.2vh 0.2vh #00000088)" : "none"
        };
      }
        
      ${entries.join("\n")}
    }
  `;
};

export default WikipediaPiecesCSS;
