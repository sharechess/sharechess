import fs from "fs";
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import prettier from "prettier";

import { BoardStyle, Style } from "./../src/types";
import { loadImage, createCanvas, Canvas } from "canvas";
import Board from "../src/board/Board";
import { CreateCanvas, LoadImage } from "../src/types";
import boardStyles from "../src/board/styles-board/templates";

import LichessBoardCSS from "./style-templates/LichessBoardCSS";
import ChesscomBoardCSS from "./style-templates/ChesscomBoardCSS";
import OpeningTreeBoardCSS from "./style-templates/OpeningTreeBoardCSS";
import ChessGamesBoardCSS from "./style-templates/ChessGamesBoardCSS";
import Chess24BoardCSS from "./style-templates/Chess24BoardCSS";
import ChesstempoBoardCSS from "./style-templates/ChesstempoBoardCSS";
import ListudyBoardCSS from "./style-templates/ListudyBoardCSS";
import ChesspeckerBoardCSS from "./style-templates/ChesspeckerBoardCSS";
import ChessbaseBoardCSS from "./style-templates/ChessbaseBoardCSS";
import WikipediaBoardCSS from "./style-templates/WikipediaBoardCSS";
import AimchessBoardCSS from "./style-templates/AimchessBoardCSS";
import ChessableBoardCSS from "./style-templates/ChessableBoardCSS";

const domains = [
  {
    name: "lichess.org",
    template: LichessBoardCSS,
  },
  {
    name: "chess.com",
    template: ChesscomBoardCSS,
  },
  {
    name: "openingtree.com",
    template: OpeningTreeBoardCSS,
  },
  {
    name: "chessgames.com",
    template: ChessGamesBoardCSS,
  },
  {
    name: "chess24.com",
    template: Chess24BoardCSS,
  },
  {
    name: "chesstempo.com",
    template: ChesstempoBoardCSS,
  },
  {
    name: "listudy.org",
    template: ListudyBoardCSS,
  },
  {
    name: "chesspecker.com",
    template: ChesspeckerBoardCSS,
  },
  {
    name: "chessbase.com",
    template: ChessbaseBoardCSS,
  },
  {
    name: "wikipedia.org",
    template: WikipediaBoardCSS,
  },
  {
    name: "aimchess.com",
    template: AimchessBoardCSS,
  },
  {
    name: "chessable.com",
    template: ChessableBoardCSS,
  },
];

const size = 1200;
const icoSize = 144;
const bigIcoSize = 200;
const OUT_DIR = "public/stylus/boards";
const OUT_IMG_DIR = "public/boards";
const OUT_ICO_DIR = "public/boards/ico";
const OUT_BIG_ICO_DIR = "_promo/boards";

const loadStyle = async (name: string) =>
  JSON.parse(
    fs.readFileSync(`public/board-templates/${name}.json`, { encoding: "utf8" })
  );

const Header = (boardName: string, content: string) => {
  return `
    /* ==UserStyle==
    @name           Custom chessboard
    @namespace      sharechess.github.io
    @version        1.5.0
    @description    ${boardName} chessboard for ${domains
    .map((d) => d.name)
    .join(", ")}
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
  borderSize: number = 0,
  borderOnly: boolean = false,
  blackFill: boolean = false
) => {
  const board = new Board(
    load as unknown as LoadImage,
    create as unknown as CreateCanvas,
    loadStyle
  );

  await board.init({
    size,
    tiles,
    showBorder: borderSize > 0,
    showExtraInfo: false,
    boardStyle: boardStyle as BoardStyle,
  });

  board.setBorderOnly(borderOnly);
  board.setHollow(blackFill);

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

const getAverageColor = (arr: Uint8ClampedArray) => {
  let R = 0;
  let G = 0;
  let B = 0;

  let size = arr.length / 4;

  for (let i = 0; i < size; i++) {
    R += arr[i * 4];
    G += arr[i * 4 + 1];
    B += arr[i * 4 + 2];
  }

  const r = Math.floor(R / size)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(G / size)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(B / size)
    .toString(16)
    .padStart(2, "0");

  return `#${r}${g}${b}`;
};

const getAverageBorderColor = async (boardStyle: string) => {
  const board = new Board(
    load as unknown as LoadImage,
    create as unknown as CreateCanvas,
    loadStyle
  );

  await board.init({
    size: 32,
    tiles: 1,
    showBorder: true,
    showExtraInfo: false,
    boardStyle: boardStyle as BoardStyle,
  });

  board.setBorderOnly(true);
  board.setHollow(false);

  await board.renderStatic();
  const clampedArr = board.toClampedArray();

  return getAverageColor(clampedArr);
};

const createBorder = async (
  size: number,
  tiles: number,
  boardStyle: string,
  styleObj: Style,
  borderSize: number = 2
): Promise<{ color: string; image: string | null }> => {
  if (!Array.isArray(styleObj.border) && styleObj.border.type === "solid") {
    return { color: styleObj.border.data.color, image: null };
  }

  const averageColor = await getAverageBorderColor(boardStyle);

  const img = await createBoard(
    size,
    tiles,
    boardStyle,
    styleObj,
    borderSize,
    true,
    true
  );

  return {
    color: averageColor,
    image: `data:image/png;base64,${img.toString("base64")}`,
  };
};

const main = async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  if (!fs.existsSync(OUT_ICO_DIR)) {
    fs.mkdirSync(OUT_ICO_DIR, { recursive: true });
  }

  if (!fs.existsSync(OUT_BIG_ICO_DIR)) {
    fs.mkdirSync(OUT_BIG_ICO_DIR, { recursive: true });
  }

  for (const boardStyle of Object.keys(boardStyles)) {
    console.log(`Generating stylesheets for board: ${boardStyle}...`);

    const boardNamePretty = boardStyle
      .split(/[-_]/)
      .map((chunk) => chunk[0].toUpperCase() + chunk.substring(1))
      .join(" ");

    const styleObj = boardStyles[boardStyle as BoardStyle] as Style;

    const board = await createBoard(size, 8, boardStyle, styleObj);
    const boardWithBorder = await createBoard(size, 8, boardStyle, styleObj, 1);
    const background = await createBoard(
      size,
      8,
      boardStyle,
      styleObj,
      1,
      true
    );
    const ico = await createBoard(icoSize, 2, boardStyle, styleObj, 3);
    const bigIco = await createBoard(bigIcoSize, 2, boardStyle, styleObj, 3);
    const borderStyle = await createBorder(size, 1, boardStyle, styleObj);

    const imgURL = `data:image/png;base64,${board.toString("base64")}`;

    const borderCSSImage =
      borderStyle.image !== null ? `url(${borderStyle.image})` : "none";

    const vars = `
    @-moz-document ${domains.map((d) => `domain(${d.name})`).join(", ")} {
      :root {
        --sharechess-board-url: url(${imgURL});
        --sharechess-border-url: ${borderCSSImage};
        --sharechess-border-color: ${borderStyle.color};
      }
    }
    `;

    const cssVars = {
      board: "var(--sharechess-board-url)",
      borderImg: "var(--sharechess-border-url)",
      borderColor: "var(--sharechess-border-color)",
    };

    const domainStylesheets = domains
      .map((d) => d.template(cssVars, styleObj))
      .join("\n");

    const content = `
      ${vars}
      ${domainStylesheets}
    `;

    const stylesheet = prettier.format(Header(boardNamePretty, content), {
      parser: "css",
    });

    fs.writeFileSync(`${OUT_DIR}/${boardStyle}.user.css`, stylesheet);

    const subfolder = `${OUT_IMG_DIR}/${boardStyle}`;
    if (!fs.existsSync(subfolder)) {
      fs.mkdirSync(subfolder);
    }

    fs.writeFileSync(`${subfolder}/${boardStyle}.png`, board);
    fs.writeFileSync(`${subfolder}/${boardStyle}_border.png`, boardWithBorder);
    fs.writeFileSync(`${subfolder}/${boardStyle}_bg.png`, background);
    fs.writeFileSync(`${OUT_ICO_DIR}/${boardStyle}_ico.png`, ico);
    fs.writeFileSync(`${OUT_BIG_ICO_DIR}/${boardStyle}_ico.png`, bigIco);
  }
};

main();
