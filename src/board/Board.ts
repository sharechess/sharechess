import { Move } from "chess.js";
import { Style, BoardData } from "../types";
import drawSquare from "./layers/drawSquare";
import drawBorder from "./layers/drawBorder";
import drawCoords from "./layers/drawCoords";
import drawMoveIndicators from "./layers/drawMoveIndicators";
import drawPieces from "./layers/drawPieces";
import boards from "./styles-board";

class Board {
  private size: number = 1024;
  private style: Style = boards.standard;
  private flipped: boolean = false;
  private boardData: BoardData | null = null;
  private ctx: CanvasRenderingContext2D;
  private borderVisible: boolean = true;
  private lastMove: Move | null = null;
  public canvas: HTMLCanvasElement = document.createElement("canvas");

  constructor(private tiles: number = 8) {
    this.canvas;
    const ctx = this.canvas.getContext("2d");
    this.canvas.classList.add("board");

    if (ctx == null) {
      throw new Error("Cannot create canvas 2D context");
    }

    this.ctx = ctx;
    this.setSize(this.size);
  }

  setSize(size: number) {
    this.size = size;
    this.canvas.width = size;
    this.canvas.height = size;
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
    this.render(this.boardData, this.lastMove);
    return this;
  }

  hideBorder() {
    this.borderVisible = false;
    return this;
  }

  showBorder() {
    this.borderVisible = true;
    return this;
  }

  async render(boardData: BoardData | null, move: Move | null = null) {
    this.lastMove = move;
    this.boardData = boardData;
    const { background, dark, light, moveIndicator, border, coords } =
      this.style;

    const hasBorder = border && this.borderVisible;
    const borderWidth = hasBorder ? this.size / 32 : 0;
    const innerSize = this.size - borderWidth * 2;
    const squareSize = innerSize / this.tiles;

    this.ctx.clearRect(0, 0, this.size, this.size);

    await drawSquare(this.ctx, innerSize, borderWidth, borderWidth, background);

    if (hasBorder) {
      await drawBorder(
        this.ctx,
        this.size - borderWidth,
        borderWidth / 2,
        borderWidth / 2,
        borderWidth,
        border
      );
    }

    for (let rank = 0; rank < this.tiles; rank++) {
      for (let file = 0; file < this.tiles; file++) {
        const style =
          (file % 2 === 0 && rank % 2 === 0) ||
          (file % 2 !== 0 && rank % 2 !== 0)
            ? light
            : dark;

        const x = file * squareSize + borderWidth;
        const y = rank * squareSize + borderWidth;

        await drawSquare(this.ctx, squareSize, x, y, style);
      }
    }

    drawCoords(
      this.ctx,
      coords,
      squareSize,
      this.tiles,
      this.flipped,
      borderWidth,
      this.size
    );

    if (boardData !== null) {
      if (this.lastMove) {
        drawMoveIndicators(
          this.ctx,
          this.lastMove,
          squareSize,
          moveIndicator,
          borderWidth,
          this.tiles,
          this.flipped
        );
      }

      await drawPieces(
        this.ctx,
        boardData,
        squareSize,
        borderWidth,
        this.tiles,
        this.flipped
      );
    }
  }

  toImgUrl() {
    return this.canvas.toDataURL();
  }

  toImgElement() {
    const dataUrl = this.toImgUrl();

    const img = new Image();
    img.classList.add("board");
    img.src = dataUrl;
    return img;
  }
}

export default Board;
