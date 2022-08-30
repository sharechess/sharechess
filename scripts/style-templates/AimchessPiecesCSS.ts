import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";

// @ts-ignore
const AimchessCSSEntry = (key: string, dataURL: string, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return ``;
};

const AimchessPiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    AimchessCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("aimchess.com") {
      .cm-chessboard .pieces > g {
        filter: ${
          shadows ? "drop-shadow(0.2vh 0.2vh 0.2vh #00000088)" : "none"
        };
      }
        
      ${entries.join("\n")}
    }
  `;
};

export default AimchessPiecesCSS;
