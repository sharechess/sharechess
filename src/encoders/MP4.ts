import * as HME from "h264-mp4-encoder";
import Board from "../board/Board";

class MP4 {
  private hme: Promise<HME.H264MP4Encoder>;
  private encoder: HME.H264MP4Encoder | null = null;
  private frameTime: number = 1000;

  constructor(private width: number, private height: number) {
    this.hme = HME.createH264MP4Encoder();
  }

  async setup(width: number, height: number) {
    this.encoder = await this.hme;
    this.encoder.width = width;
    this.encoder.height = height;
    this.encoder.frameRate = 1000 / this.frameTime;
    this.encoder.quantizationParameter = 10;
    this.encoder.initialize();
  }

  async add(board: Board, frames: number) {
    const data = board.toClampedArray();

    if (this.encoder === null) {
      await this.setup(this.width, this.height);
    }

    while (frames--) {
      this.encoder?.addFrameRgba(data);
    }
  }

  async render(): Promise<File> {
    this.encoder?.finalize();

    const uint8Array = this.encoder?.FS.readFile(
      this.encoder.outputFilename
    ) as Uint8Array;

    const timestamp = Date.now();

    const file = new File([uint8Array], `board_${timestamp}.mp4`, {
      type: "video/mp4",
      lastModified: timestamp,
    });

    this.encoder?.delete();

    return file;
  }
}

export default MP4;
