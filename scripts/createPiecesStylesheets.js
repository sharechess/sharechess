const fs = require("fs");
const pieces = require("./utils/pieces");
const encode = require("./utils/encode");

const PIECES_FOLDER = "public/pieces";
const OUT_DIR_LICHESS = "public/stylus/lichess";
const OUT_DIR_CHESSCOM = "public/stylus/chesscom";

const LichessCSSEntry = (key, dataURL, forceStyle = true) => {
  const [piece, color] = key.split("");

  return `.is2d .${pieces.names[piece]}.${
    pieces.colors[color]
  } {background-image:url('${dataURL}')${forceStyle ? " !important" : ""}}`;
};

const ChesscomCSSEntry = (key, dataURL, forceStyle = true) => {
  const [piece, color] = key.split("");
  const selector = `${color}${piece}`;

  return `.piece.${selector}, .promotion-piece.${selector} {background-image:url('${dataURL}')${
    forceStyle ? " !important" : ""
  }}`;
};

const LichessHeader = (setName, entries) => {
  return `
    /* ==UserStyle==
    @name           ${setName} chess set
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

const ChesscomHeader = (setName, entries) => {
  return `
    /* ==UserStyle==
    @name           ${setName} chess set
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
  if (!fs.existsSync(OUT_DIR_LICHESS)) {
    fs.mkdirSync(OUT_DIR_LICHESS, { recursive: true });
  }

  if (!fs.existsSync(OUT_DIR_CHESSCOM)) {
    fs.mkdirSync(OUT_DIR_CHESSCOM, { recursive: true });
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

    fs.writeFileSync(`${OUT_DIR_LICHESS}/${setName}.user.css`, cssLichess);
    fs.writeFileSync(`${OUT_DIR_CHESSCOM}/${setName}.user.css`, cssChesscom);
  }
};

createUserStyles();
