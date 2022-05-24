import { BoardStyle, Style } from "./../src/types";
import { loadImage, createCanvas, Canvas } from "canvas";
import Board from "../src/board/Board";
import { CreateCanvas, LoadImage } from "../src/types";
import boardStyles from "../src/board/styles-board/boardStyles";
import fs from "fs";
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";

const size = 1200;
const icoSize = 144;
const OUT_DIR = "public/stylus/boards";
const OUT_IMG_DIR = "public/boards";
const OUT_ICO_DIR = "public/boards/_ico";

const LichessStylesheet = (
  dataURL: string,
  boardName: string,
  style: Style
) => {
  return `
    /* ==UserStyle==
    @name           Lichess ${boardName} board
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
    @name           Chess.com ${boardName} board
    @namespace      chess.com
    @version        1.0.0
    @description    Chessboard for chess.com
    @author         sharechess.github.io
    ==/UserStyle== */

    @-moz-document domain("chess.com") {
      .board {background-image: url(${dataURL}) !important}
      .coordinate-light {fill: ${style.coords.onLight} !important}
      .coordinate-dark {fill: ${style.coords.onDark} !important}
      .coords-light {color: ${style.coords.onLight} !important}
      .coords-dark {color: ${style.coords.onDark} !important}
      .highlight {opacity: 1 !important; background-color: ${style.moveIndicator.color} !important}
    }
  `;
};

const create = () => createCanvas(size, size);
const load = (src: string) => loadImage(`public${src}`);

const createBoard = async (
  size: number,
  tiles: number,
  boardStyle: string,
  styleObj: Style,
  borderSize: number = 0
) => {
  const board = new Board(
    {
      size,
      tiles,
      showBorder: borderSize > 0,
      showExtraInfo: false,
      boardStyle: boardStyle as BoardStyle,
    },
    load as unknown as LoadImage,
    create as unknown as CreateCanvas
  );

  if (borderSize > 0) {
    board.setBorderScale(borderSize);
  }

  await board.renderStatic();

  const image = (board.canvas as unknown as Canvas).toBuffer();

  const minified =
    styleObj.category === "gradient" // Don't minify gradients, as it results in a BIGGER file
      ? image
      : await imagemin.buffer(image, {
          plugins: [imageminPngquant({ quality: [0.7, 0.9] })],
        });

  return minified;
};

const main = async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  if (!fs.existsSync(OUT_ICO_DIR)) {
    fs.mkdirSync(OUT_ICO_DIR, { recursive: true });
  }

  for (const boardStyle of Object.keys(boardStyles)) {
    console.log(`Generating stylesheets for board: ${boardStyle}...`);

    const boardNamePretty = boardStyle
      .split(/[-_]/)
      .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
      .join(" ");

    const styleObj = boardStyles[boardStyle as BoardStyle];

    const board = await createBoard(size, 8, boardStyle, styleObj);
    const ico = await createBoard(icoSize, 2, boardStyle, styleObj, 3);

    const imgURL = `data:image/png;base64,${board.toString("base64")}`;

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

    fs.writeFileSync(`${OUT_IMG_DIR}/${boardStyle}.png`, board);
    fs.writeFileSync(`${OUT_ICO_DIR}/${boardStyle}_ico.png`, ico);
  }
};

main();
