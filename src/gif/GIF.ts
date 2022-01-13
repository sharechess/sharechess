import GIFLib from "gif.js";

class GIF {
  private gif: GIFLib;

  constructor(size: number, loop: boolean) {
    this.gif = new GIFLib({
      workers: 2,
      quality: 10,
      width: size,
      height: size,
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

  render(): Promise<string> {
    return new Promise((resolve) => {
      this.gif.on("finished", function (blob) {
        resolve(URL.createObjectURL(blob));
      });

      this.gif.render();
    });
  }
}

export default GIF;
