import { BoardStyle, Style } from "./../src/types";
import { loadImage, createCanvas, Canvas } from "canvas";
import Board from "../src/board/Board";
import { CreateCanvas, LoadImage } from "../src/types";
import boardStyles from "../src/board/styles-board/boardStyles";
import fs from "fs";
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";

const size = 1200;
const OUT_DIR = "public/stylus/boards";

const LichessStylesheet = (
  dataURL: string,
  boardName: string,
  style: Style
) => {
  return `
    /* ==UserStyle==
    @name           Lichess ${boardName} chessboard
    @namespace      lichess.org
    @version        1.0.0
    @description    Chessboard for lichess.org
    @author         sharechess.github.io
    ==/UserStyle== */

    @-moz-document domain("lichess.org") {
      .is2d cg-board {background-image: url(${dataURL}) !important}
      .is2d coords {
        --cg-ccw: ${style.coords.onDark} !important;
        --cg-ccb: ${style.coords.onLight} !important;
      }
      square.last-move {background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

const ChesscomStylesheet = (
  dataURL: string,
  boardName: string,
  style: Style
) => {
  return `
    /* ==UserStyle==
    @name           Chess.com ${boardName} chessboard
    @namespace      chess.com
    @version        1.0.0
    @description    Chessboard for chess.com
    @author         sharechess.github.io
    ==/UserStyle== */

    @-moz-document domain("chess.com") {
      .board {background-image: url(${dataURL}) !important}
      .coordinate-light {fill: ${style.coords.onLight} !important}
      .coordinate-dark {fill: ${style.coords.onDark} !important}
      .highlight {opacity: 1 !important; background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

const main = async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const create = () => createCanvas(size, size);
  const load = (src: string) => loadImage(`public${src}`);

  for (const boardStyle of Object.keys(boardStyles)) {
    console.log(`Generating stylesheets for board: ${boardStyle}...`);

    const boardNamePretty = boardStyle
      .split(/[-_]/)
      .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
      .join(" ");

    const styleObj = boardStyles[boardStyle as BoardStyle];

    const board = new Board(
      {
        size,
        tiles: 8,
        showBorder: false,
        showExtraInfo: false,
        boardStyle: boardStyle as BoardStyle,
      },
      load as unknown as LoadImage,
      create as unknown as CreateCanvas
    );

    await board.renderStatic();
    const image = (board.canvas as unknown as Canvas).toBuffer();
    const minified =
      styleObj.category === "gradient" // Don't minify gradients, as it results in a BIGGER file
        ? image
        : await imagemin.buffer(image, {
            plugins: [imageminPngquant({ quality: [0.7, 0.9] })],
          });

    const imgURL = `data:image/png;base64,${minified.toString("base64")}`;

    const lichessStylesheet = LichessStylesheet(
      imgURL,
      boardNamePretty,
      styleObj
    );

    const chesscomStylesheet = ChesscomStylesheet(
      imgURL,
      boardNamePretty,
      styleObj
    );

    fs.writeFileSync(
      `${OUT_DIR}/${boardStyle}_lichess.user.css`,
      lichessStylesheet
    );

    fs.writeFileSync(
      `${OUT_DIR}/${boardStyle}_chesscom.user.css`,
      chesscomStylesheet
    );
  }
};

main();
