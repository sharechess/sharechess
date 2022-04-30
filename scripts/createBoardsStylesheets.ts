import { BoardStyle } from "./../src/types";
import { loadImage, createCanvas } from "canvas";
import Board from "../src/board/Board";
import { CreateCanvas, LoadImage } from "../src/types";
import boardStyles from "../src/board/styles-board/boardStyles";
import fs from "fs";

const size = 1024;
const OUT_DIR = "public/boards";

const main = async () => {
  const create = () => createCanvas(size, size);
  const load = (src: string) => loadImage(`public${src}`);

  for (const boardStyle of Object.keys(boardStyles)) {
    console.log(`Generating image for board ${boardStyle}...`);

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
    // @ts-ignore
    const image = board.canvas.toBuffer();

    if (!fs.existsSync(OUT_DIR)) {
      fs.mkdirSync(OUT_DIR, { recursive: true });
    }

    fs.writeFileSync(`${OUT_DIR}/${boardStyle}.png`, image);
  }
};

main();
