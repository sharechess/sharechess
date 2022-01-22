import * as HME from "h264-mp4-encoder";

class MP4 {
  private hme: Promise<HME.H264MP4Encoder>;
  private encoder: HME.H264MP4Encoder | null = null;

  constructor(width: number, height: number) {
    this.hme = HME.createH264MP4Encoder();
    this.setup(width, height);
  }

  async setup(width: number, height: number) {
    this.encoder = await this.hme;
    this.encoder.width = width;
    this.encoder.height = height;
    this.encoder.initialize();
  }

  // add(frame: CanvasImageSource | string, delay: number) {
  //   // this.encoder?.addFrameRgba()
  // }

  // async render(): Promise<File> {
  //   const blob = await this.video.complete();

  //   const timestamp = Date.now();

  //   const file = new File([blob], `board_${timestamp}.webm`, {
  //     type: "video/webm",
  //     lastModified: timestamp,
  //   });

  //   return file;
  // }
}

export default MP4;
