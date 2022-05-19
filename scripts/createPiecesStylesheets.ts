import { PieceType, PieceColor } from "../src/types";
import fs from "fs";
import pieces from "./utils/pieces";
import encode from "./utils/encode";

const PIECES_FOLDER = "public/pieces";
const OUT_DIR = "public/stylus/pieces";

type CSSEntry = (key: string, dataURL: string, forceStyle?: boolean) => string;
type Header = (netName: string, entries: string[], shadows?: boolean) => string;

const LichessCSSEntry: CSSEntry = (key, dataURL, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];

  return `.is2d .${pieces.names[piece]}.${
    pieces.colors[color]
  } {background-image:url('${dataURL}')${forceStyle ? " !important" : ""}}`;
};

const ChesscomCSSEntry: CSSEntry = (key, dataURL, forceStyle = true) => {
  const [piece, color] = key.split("") as [PieceType, PieceColor];
  const selector = `${color}${piece}`;

  return `.piece.${selector}, .promotion-piece.${selector} {background-image:url('${dataURL}')${
    forceStyle ? " !important" : ""
  }}`;
};

const LichessHeader: Header = (setName, entries, shadows = false) => {
  return `
    /* ==UserStyle==
    @name           Lichess ${setName} chess set
    @namespace      lichess.org
    @version        1.0.0
    @description    Chess set for lichess.org
    @author         sharechess.github.io
    ==/UserStyle== */

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

const ChesscomHeader: Header = (setName, entries, shadows = false) => {
  return `
    /* ==UserStyle==
    @name           Chess.com ${setName} chess set
    @namespace      chess.com
    @version        1.0.0
    @description    Chess set for chess.com
    @author         sharechess.github.io
    ==/UserStyle== */

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

const createUserStyles = () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const sets = fs.readdirSync(PIECES_FOLDER);

  for (const name of sets) {
    const files = fs.readdirSync(`${PIECES_FOLDER}/${name}`);

    const namePretty = name
      .split(/[-_]/)
      .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
      .join(" ");

    const entriesLichess = [];
    const entriesChesscom = [];

    for (const fileName of files) {
      const key = fileName.split(".")[0];
      const dataURL = encode(`${PIECES_FOLDER}/${name}/${fileName}`);

      entriesLichess.push(LichessCSSEntry(key, dataURL));
      entriesChesscom.push(ChesscomCSSEntry(key, dataURL));
    }

    const cssLichess = LichessHeader(namePretty, entriesLichess);
    const cssLichessSh = LichessHeader(namePretty, entriesLichess, true);
    const cssChesscom = ChesscomHeader(namePretty, entriesChesscom);
    const cssChesscomSh = ChesscomHeader(namePretty, entriesChesscom, true);

    fs.writeFileSync(`${OUT_DIR}/${name}_lichess.user.css`, cssLichess);
    fs.writeFileSync(`${OUT_DIR}/${name}_sh_lichess.user.css`, cssLichessSh);
    fs.writeFileSync(`${OUT_DIR}/${name}_chesscom.user.css`, cssChesscom);
    fs.writeFileSync(`${OUT_DIR}/${name}_sh_chesscom.user.css`, cssChesscomSh);
  }
};

createUserStyles();
