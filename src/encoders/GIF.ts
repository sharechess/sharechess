import GIFLib from "gif.js";

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
      quality: 20,
      width,
      height,
      repeat: loop ? 0 : -1,
    });
    this.frameTime = frameTime;
  }

  add(
    frame:
      | CanvasImageSource
      | CanvasRenderingContext2D
      | WebGLRenderingContext
      | ImageData,

    frames: number
  ) {
    this.gif.addFrame(frame, { delay: frames * this.frameTime });
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
