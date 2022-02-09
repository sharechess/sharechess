import { BoardConfig, PiecesStyle, Position } from "./../types";
import { Style } from "../types";
import drawRectangle from "./layers/drawRectangle";
import drawCoords from "./layers/drawCoords";
import drawMoveIndicators from "./layers/drawMoveIndicators";
import drawPieces from "./layers/drawPieces";
import drawHeader from "./layers/drawHeader.ts";
import drawExtraInfo from "./layers/drawExtraInfo";
import boards from "./styles-board";

const defaultConfig: BoardConfig = {
  size: 720,
  tiles: 8,
  boardStyle: boards.avocado,
  piecesStyle: "gioco",
  showBorder: true,
  showExtraInfo: true,
  showMaterial: true,
  showMoveIndicator: true,
  showChecks: true,
  showCoords: true,
  flipped: false,
};

class Board {
  private cfg: BoardConfig = defaultConfig;

  private scale: number = 1;
  private tiles: number = 8;

  private size: number = 0;
  private squareSize: number = 0;
  private innerSize: number = 0;
  private borderWidth: number = 0;
  private margin: number = 0;

  private style: Style = boards.standard;
  private flipped: boolean = false;
  private header: { [key: string]: string | undefined } = {};
  // private boardData: BoardData | null = null;
  private borderVisible: boolean = true;
  private lastPosition: Position | null = null;
  // private lastMaterial: Material | undefined = undefined;
  private background: HTMLCanvasElement | null = null;
  private extraInfo: boolean = true;
  private piecesStyle: PiecesStyle = "tatiana";
  // @ts-ignore
  private showMaterial: boolean = true;
  private showMoveIndicator: boolean = true;
  private showCoords: boolean = true;
  // @ts-ignore
  private showChecks: boolean = true;
  private currentScreen: "title" | "move" = "move";

  private ctx: CanvasRenderingContext2D;
  private tempCtx: CanvasRenderingContext2D;

  private tempCanvas: HTMLCanvasElement = document.createElement("canvas");
  public canvas: HTMLCanvasElement = document.createElement("canvas");

  constructor(config: Partial<BoardConfig> = {}) {
    const ctx = this.canvas.getContext("2d");
    const tempCtx = this.tempCanvas.getContext("2d");
    this.canvas.classList.add("board");

    if (ctx === null || tempCtx === null) {
      throw new Error("Cannot create canvas 2D context");
    }

    this.ctx = ctx;
    this.tempCtx = tempCtx;

    this.updateConfig(config, false);
  }

  async updateConfig(config: Partial<BoardConfig>, refresh: boolean = true) {
    const cfg = { ...this.cfg, ...config };

    this.cfg = cfg;

    this.tiles = cfg.tiles;
    this.extraInfo = cfg.showExtraInfo;
    this.piecesStyle = cfg.piecesStyle;
    this.showMaterial = cfg.showMaterial;
    this.showMoveIndicator = cfg.showMoveIndicator;
    this.showCoords = cfg.showCoords;
    this.showChecks = cfg.showChecks;
    this.flipped = cfg.flipped;
    this.borderVisible = cfg.showBorder;

    this.setSize(cfg.size);
    this.setStyle(cfg.boardStyle);

    if (refresh) {
      await this.refresh();
    }
  }

  async refresh() {
    await this.renderBackground();

    if (this.currentScreen === "title") {
      await this.titleFrame(this.header);
    } else if (this.lastPosition !== null) {
      await this.frame(this.lastPosition, this.header);
    }

    this.render();
  }

  setSize(size: number) {
    this.size = size;
    this.scale = size / 720;
    this.margin = this.extraInfo ? Math.round(50 * this.scale) : 0;

    const height = size + this.margin * 2;

    if (this.canvas.width !== size || this.canvas.height !== height) {
      this.canvas.width = size;
      this.canvas.height = height;
      this.tempCanvas.width = size;
      this.tempCanvas.height = height;
    }

    const tempBorderWidth = this.borderVisible ? this.size / 32 : 0;
    const tempInnerSize = this.size - tempBorderWidth * 2;
    this.squareSize = Math.floor(tempInnerSize / this.tiles);
    this.innerSize = this.squareSize * this.tiles;
    this.borderWidth = (this.size - this.innerSize) / 2;

    return this;
  }

  getSize() {
    return this.size;
  }

  setStyle(style: Style) {
    this.style = style;
    return this;
  }

  flip() {
    this.flipped = !this.flipped;
    this.refresh();
    return this;
  }

  hideBorder() {
    this.borderVisible = false;
    this.setSize(this.size);
    this.refresh();
    return this;
  }

  showBorder() {
    this.borderVisible = true;
    this.setSize(this.size);
    this.refresh();
    return this;
  }

  toggleBorder() {
    this.borderVisible = !this.borderVisible;
    this.setSize(this.size);
    this.refresh();
    return this;
  }

  toggleExtraInfo() {
    this.extraInfo = !this.extraInfo;
    this.setSize(this.size);
    this.refresh();
    return this;
  }

  async titleFrame(header: { [key: string]: string | undefined }) {
    this.currentScreen = "title";
    this.header = header;

    await drawHeader(
      this.tempCtx,
      this.size,
      this.scale,
      this.margin,
      this.style,
      header
    );
  }

  async renderBackground() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = this.size;
    canvas.height = this.size + this.margin * 2;

    const { background, dark, light, border, coords } = this.style;

    await drawRectangle(ctx, this.width, this.height, 0, 0, border);

    await drawRectangle(
      ctx,
      this.innerSize,
      this.innerSize,
      this.borderVisible ? this.borderWidth : 0,
      (this.borderVisible ? this.borderWidth : 0) + this.margin,
      background
    );

    for (let rank = 0; rank < this.tiles; rank++) {
      for (let file = 0; file < this.tiles; file++) {
        const style =
          (file % 2 === 0 && rank % 2 === 0) ||
          (file % 2 !== 0 && rank % 2 !== 0)
            ? light
            : dark;

        const x = file * this.squareSize + this.borderWidth;
        const y = rank * this.squareSize + this.borderWidth + this.margin;

        await drawRectangle(ctx, this.squareSize, this.squareSize, x, y, style);
      }
    }

    if (this.borderVisible && this.showCoords) {
      drawCoords(
        ctx,
        coords,
        this.squareSize,
        this.tiles,
        this.flipped,
        this.borderWidth,
        this.size,
        this.borderVisible,
        this.margin
      );
    }

    this.background = canvas;
  }

  async frame(
    position: Position | null,
    header: { [key: string]: string | undefined }
  ) {
    this.currentScreen = "move";
    this.lastPosition = position;
    this.header = header;

    this.tempCtx.clearRect(0, 0, this.size, this.size);

    if (this.background === null) {
      await this.renderBackground();
    }

    this.tempCtx.drawImage((await this.background) as HTMLCanvasElement, 0, 0);

    if (this.lastPosition?.move && this.showMoveIndicator) {
      await drawMoveIndicators(
        this.tempCtx,
        this.lastPosition.move,
        this.squareSize,
        this.style,
        this.borderWidth,
        this.tiles,
        this.flipped,
        this.margin
      );
    }

    if (!this.borderVisible && this.showCoords) {
      drawCoords(
        this.tempCtx,
        this.style.coords,
        this.squareSize,
        this.tiles,
        this.flipped,
        this.borderWidth,
        this.size,
        this.borderVisible,
        this.margin
      );
    }

    if (!this.lastPosition) {
      return;
    }

    await drawPieces(
      this.tempCtx,
      this.lastPosition,
      this.squareSize,
      this.borderWidth,
      this.flipped,
      this.margin,
      this.piecesStyle
    );

    if (this.extraInfo && header) {
      await drawExtraInfo(
        this.tempCtx,
        this.width,
        this.height,
        this.scale,
        this.margin,
        this.style,
        this.header,
        this.flipped,
        this.lastPosition
      );
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.size, this.size);
    this.ctx.drawImage(this.tempCanvas, 0, 0);
  }

  toImgUrl() {
    return this.canvas.toDataURL();
  }

  toImageData() {
    return this.ctx.getImageData(0, 0, this.width, this.height).data;
  }

  toImgElement() {
    const dataUrl = this.toImgUrl();

    const img = new Image();
    img.classList.add("board");
    img.src = dataUrl;
    return img;
  }

  get width() {
    return this.size;
  }

  get height() {
    return this.size + this.margin * 2;
  }

  toGIF() {}
}

export default Board;
