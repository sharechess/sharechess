import fs from "fs";
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import { loadImage, createCanvas } from "canvas";
import { PieceType, PieceColor } from "../src/types";
import pieces from "./utils/pieces";
import encode from "./utils/encode";

const PIECES_FOLDER = "public/pieces";
const OUT_DIR = "public/stylus/pieces";
const OUT_ICO_DIR = "public/pieces/_ico";

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

  const liveSelectors = pieces.chessComLiveIds[selector]
    .map((n) => `.piece#piece-${n}`)
    .join(", ");

  return `.piece.${selector}, .promotion-piece.${selector}, ${liveSelectors} {background-image:url('${dataURL}')${
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

const createMiniature = async (name: string) => {
  // @TODO - some images have poor quality (svg scaling doesn't seem to work)
  const canvasSize = 240;
  const squareSize = 180;

  const nw = await loadImage(`${PIECES_FOLDER}/${name}/nw.svg`);
  const nb = await loadImage(`${PIECES_FOLDER}/${name}/nb.svg`);
  const canvas = createCanvas(canvasSize, canvasSize, "svg");

  const ctx = canvas.getContext("2d");

  ctx.shadowColor = "rgba(0, 0, 0, 1)";
  ctx.shadowOffsetX = squareSize * 0.07;
  ctx.shadowOffsetY = squareSize * 0.07;
  ctx.shadowBlur = squareSize * 0.1;

  ctx.drawImage(nb, 60, 10, 180, 180);
  ctx.drawImage(nw, 0, 50, 180, 180);

  const image = canvas.toBuffer();
  const minified = await imagemin.buffer(image, {
    plugins: [imageminPngquant({ quality: [0.7, 0.9] })],
  });

  return image;
};

const createUserStyles = async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  if (!fs.existsSync(OUT_ICO_DIR)) {
    fs.mkdirSync(OUT_ICO_DIR, { recursive: true });
  }

  const sets = fs.readdirSync(PIECES_FOLDER).filter((name) => name !== "_ico");

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

    // const miniature = await createMiniature(name);

    // fs.writeFileSync(`${OUT_ICO_DIR}/${name}_ico.png`, miniature);
  }
};

createUserStyles();
