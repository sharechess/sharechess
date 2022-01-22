import GIFLib from "gif.js";

class GIF {
  private gif: GIFLib;

  constructor(width: number, height: number, loop: boolean) {
    this.gif = new GIFLib({
      workers: 2,
      quality: 10,
      width,
      height,
      repeat: loop ? 0 : -1,
    });
  }

  add(
    frame:
      | CanvasImageSource
      | CanvasRenderingContext2D
      | WebGLRenderingContext
      | ImageData,
    delay: number
  ) {
    this.gif.addFrame(frame, { delay });
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
