import fs from "fs";
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import prettier from "prettier";

import { BoardStyle, Style } from "./../src/types";
import { loadImage, createCanvas, Canvas } from "canvas";
import Board from "../src/board/Board";
import { CreateCanvas, LoadImage } from "../src/types";
import boardStyles from "../src/board/styles-board/boardStyles";

import LichessBoardCSS from "./style-templates/LichessBoardCSS";
import ChesscomBoardCSS from "./style-templates/ChesscomBoardCSS";

const domains = [
  {
    name: "lichess.org",
    template: LichessBoardCSS,
  },
  {
    name: "chess.com",
    template: ChesscomBoardCSS,
  },
];

const size = 1200;
const icoSize = 144;
const OUT_DIR = "public/stylus/boards";
const OUT_IMG_DIR = "public/boards";
const OUT_ICO_DIR = "public/boards/ico";

const Header = (boardName: string, content: string) => {
  return `
    /* ==UserStyle==
    @name           ${boardName} board
    @namespace      sharechess.github.io
    @version        1.0.0
    @description    Chessboard for ${domains.map((d) => d.name).join(", ")}
    @author         sharechess.github.io
    ==/UserStyle== */

    ${content}
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

    const vars = `
    @-moz-document ${domains.map((d) => `domain(${d.name})`).join(", ")} {
      :root {
        --sharechess-board-url: url(${imgURL});
      }
    }
    `;

    const boardVar = "var(--sharechess-board-url)";

    const domainStylesheets = domains
      .map((d) => d.template(boardVar, styleObj))
      .join("\n");

    const content = `
      ${vars}
      ${domainStylesheets}
    `;

    const stylesheet = prettier.format(Header(boardNamePretty, content), {
      parser: "css",
    });

    fs.writeFileSync(`${OUT_DIR}/${boardStyle}.user.css`, stylesheet);

    fs.writeFileSync(`${OUT_IMG_DIR}/${boardStyle}.png`, board);
    fs.writeFileSync(`${OUT_ICO_DIR}/${boardStyle}_ico.png`, ico);
  }
};

main();
