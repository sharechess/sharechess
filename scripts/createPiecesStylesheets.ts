import { PieceType, PieceColor } from "../src/types";
import fs from "fs";
import pieces from "./utils/pieces";
import encode from "./utils/encode";

const PIECES_FOLDER = "public/pieces";
const OUT_DIR = "public/stylus/pieces";

type CSSEntry = (key: string, dataURL: string, forceStyle?: boolean) => string;
type Header = (netName: string, entries: string[]) => string;

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

const LichessHeader: Header = (setName, entries) => {
  return `
    /* ==UserStyle==
    @name           Lichess ${setName} chess set
    @namespace      lichess.org
    @version        1.0.0
    @description    Chess set for lichess.org
    @author         sharechess.github.io
    ==/UserStyle== */

    @-moz-document domain("lichess.org") {
      ${entries.join("\n")}
    }
  `;
};

const ChesscomHeader: Header = (setName, entries) => {
  return `
    /* ==UserStyle==
    @name           Chess.com ${setName} chess set
    @namespace      chess.com
    @version        1.0.0
    @description    Chess set for chess.com
    @author         sharechess.github.io
    ==/UserStyle== */

    @-moz-document domain("chess.com") {
      ${entries.join("\n")}
    }
  `;
};

const createUserStyles = () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const sets = fs.readdirSync(PIECES_FOLDER);

  for (const setName of sets) {
    const files = fs.readdirSync(`${PIECES_FOLDER}/${setName}`);

    const setNamePretty = setName
      .split(/[-_]/)
      .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
      .join(" ");

    const entriesLichess = [];
    const entriesChesscom = [];

    for (const fileName of files) {
      const key = fileName.split(".")[0];
      const dataURL = encode(`${PIECES_FOLDER}/${setName}/${fileName}`);

      entriesLichess.push(LichessCSSEntry(key, dataURL));
      entriesChesscom.push(ChesscomCSSEntry(key, dataURL));
    }

    const cssLichess = LichessHeader(setNamePretty, entriesLichess);
    const cssChesscom = ChesscomHeader(setNamePretty, entriesChesscom);

    fs.writeFileSync(`${OUT_DIR}/${setName}_lichess.user.css`, cssLichess);
    fs.writeFileSync(`${OUT_DIR}/${setName}_chesscom.user.css`, cssChesscom);
  }
};

createUserStyles();
