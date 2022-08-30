import GIFLib from "gif.js";
import Board from "../board/Board";

class GIF {
  private gif: GIFLib;
  private frameTime: number;

  constructor(
    width: number,
    height: number,
    loop: boolean,
    frameTime: number = 1000
  ) {
    this.gif = new GIFLib({
      workers: 2,
      quality: 30,
      width,
      height,
      repeat: loop ? 0 : -1,
    });
    this.frameTime = frameTime;
  }

  add(board: Board, frames: number) {
    const data = board.toImageData();

    while (frames--) {
      this.gif.addFrame(data, { delay: this.frameTime });
    }
  }

  render(): Promise<File> {
    return new Promise((resolve) => {
      const timestamp = Date.now();
      this.gif.on("finished", function (blob) {
        const file = new File([blob], `board_${timestamp}.gif`, {
          type: "image/gif",
          lastModified: timestamp,
        });

        resolve(file);
      });

      this.gif.render();
    });
  }
}

export default GIF;
