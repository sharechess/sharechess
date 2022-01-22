// @ts-ignore
import WebMWriter from "webm-writer";

class WebM {
  private video: WebMWriter;

  constructor() {
    this.video = new WebMWriter({
      quality: 0.8,
      fileWriter: null,
      fd: null,
      frameDuration: 1000,
      transparent: false,
    });
  }

  add(frame: CanvasImageSource | string, delay: number) {
    this.video.addFrame(frame, delay);
  }

  async render(): Promise<File> {
    const blob = await this.video.complete();

    const timestamp = Date.now();

    const file = new File([blob], `board_${timestamp}.webm`, {
      type: "video/webm",
      lastModified: timestamp,
    });

    return file;
  }
}

export default WebM;
