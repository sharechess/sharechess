// @ts-ignore
import WebMWriter from "webm-writer";
import Board from "../board/Board";

class WebM {
  private video: WebMWriter;

  constructor(private frameTime: number = 1000) {
    this.video = new WebMWriter({
      quality: 0.8,
      fileWriter: null,
      fd: null,
      frameDuration: 1000,
      transparent: false,
    });
  }

  add(board: Board, frames: number) {
    const data = board.canvas;
    this.video.addFrame(data, frames * this.frameTime);
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
