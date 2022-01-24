import { Move } from "chess.js";
import { Style, BoardData } from "../types";
import drawRectangle from "./layers/drawRectangle";
import drawCoords from "./layers/drawCoords";
import drawMoveIndicators from "./layers/drawMoveIndicators";
import drawPieces from "./layers/drawPieces";
import drawHeader from "./layers/drawHeader.ts";
import drawExtraInfo from "./layers/drawExtraInfo";
import boards from "./styles-board";

class Board {
  private size: number = 720;
  private style: Style = boards.standard;
  private flipped: boolean = false;
  // @ts-ignore
  private boardData: BoardData | null = null;
  private ctx: CanvasRenderingContext2D;
  private tempCtx: CanvasRenderingContext2D;
  private borderVisible: boolean = true;
  private lastMove: Move | null = null;
  public canvas: HTMLCanvasElement = document.createElement("canvas");
  private tempCanvas: HTMLCanvasElement = document.createElement("canvas");
  private squareSize: number = 84;
  private innerSize: number = 672;
  private borderWidth: number = 24;
  private background: HTMLCanvasElement | null = null;
  private extraInfo: boolean = true;
  private scale: number = 1;
  private margin: number = 0;

  constructor(private tiles: number = 8) {
    const ctx = this.canvas.getContext("2d");
    const tempCtx = this.tempCanvas.getContext("2d");
    this.canvas.classList.add("board");

    if (ctx === null || tempCtx === null) {
      throw new Error("Cannot create canvas 2D context");
    }

    this.ctx = ctx;
    this.tempCtx = tempCtx;
    this.setSize(this.size);
  }

  setSize(size: number) {
    this.size = size;
    this.scale = size / 720;
    this.margin = this.extraInfo ? 50 * this.scale : 0;

    this.canvas.width = size;
    this.canvas.height = size + this.margin * 2;
    this.tempCanvas.width = size;
    this.tempCanvas.height = size + this.margin * 2;

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
    // this.render(this.boardData, this.lastMove);
    return this;
  }

  hideBorder() {
    this.borderVisible = false;
    this.setSize(this.size);
    return this;
  }

  showBorder() {
    this.borderVisible = true;
    this.setSize(this.size);
    return this;
  }

  isCheck(move: Move | null) {
    if (!move) {
      return false;
    }

    return move.san.includes("+");
  }

  isMate(move: Move | null) {
    if (!move) {
      return false;
    }

    return move.san.includes("#");
  }

  getOppositeColor(color?: "w" | "b") {
    if (!color) {
      return;
    }

    return color === "w" ? "b" : "w";
  }

  async titleFrame(header: { [key: string]: string | undefined }) {
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

    if (this.borderVisible) {
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
    boardData: BoardData | null,
    header: { [key: string]: string | undefined },
    move: Move | null = null
  ) {
    this.lastMove = move;
    this.boardData = boardData;

    const check = this.isCheck(move)
      ? this.getOppositeColor(move?.color)
      : undefined;
    const mate = this.isMate(move)
      ? this.getOppositeColor(move?.color)
      : undefined;

    this.tempCtx.clearRect(0, 0, this.size, this.size);

    if (this.background === null) {
      await this.renderBackground();
    }

    this.tempCtx.drawImage((await this.background) as HTMLCanvasElement, 0, 0);

    if (boardData !== null) {
      if (this.lastMove) {
        await drawMoveIndicators(
          this.tempCtx,
          this.lastMove,
          this.squareSize,
          this.style,
          this.borderWidth,
          this.tiles,
          this.flipped,
          this.margin
        );
      }

      if (!this.borderVisible) {
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

      const piecesShadow = false;

      await drawPieces(
        this.tempCtx,
        boardData,
        this.squareSize,
        this.borderWidth,
        this.tiles,
        this.flipped,
        check,
        mate,
        piecesShadow,
        this.margin
      );

      if (this.extraInfo && header) {
        await drawExtraInfo(
          this.tempCtx,
          this.width,
          this.height,
          this.scale,
          this.margin,
          this.style,
          header,
          this.flipped
        );
      }
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
