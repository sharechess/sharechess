import pieces from "../utils/pieces";
import { PieceType, PieceColor } from "../../src/types";

const LichessCSSEntry = (key: string, dataURL: string, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return `.is2d .${pieces.names[piece]}.${
    pieces.colors[color]
  } {background-image: ${dataURL}${forceStyle ? " !important" : ""}}`;
};

const LichessPiecesCSS = (
  encodedPieces: { key: string; cssVar: string }[],
  shadows = false
) => {
  const entries: string[] = encodedPieces.map((p) =>
    LichessCSSEntry(p.key, `var(${p.cssVar})`)
  );

  return `
    @-moz-document domain("lichess.org") {
      .is2d piece {
        filter: ${
          shadows ? "drop-shadow(0.7vh 0.7vh 0.5vh #00000088)" : "none"
        };
      }

      .is2d.mini-board piece, .is2d.mini-game piece {
        filter: ${
          shadows ? "drop-shadow(0.3vh 0.3vh 0.2vh #00000088)" : "none"
        };
      }

      ${entries.join("\n")}
    }
  `;
};

export default LichessPiecesCSS;
