import { PieceType, PieceColor, Piece } from "../../types";
import piecesSets from "../styles-pieces";
import loadImage from "./loadImage";

let style: keyof typeof piecesSets | null = null;
let piecesImages: Map<string, HTMLImageElement> = new Map();

const PiecesCache = {
  async load(piecesSetName: keyof typeof piecesSets) {
    await Promise.all(
      Object.entries(piecesSets[piecesSetName]).map(([key, src]) => {
        return loadImage(src).then((img) => {
          piecesImages.set(key, img);
        });
      })
    );
  },

  async get(
    piecesSetName: keyof typeof piecesSets,
    pieceName: PieceType,
    pieceColor: PieceColor
  ) {
    if (style !== piecesSetName) {
      await this.load(piecesSetName);
      style = piecesSetName;
    }

    const piece = `${pieceName}${pieceColor}` as Piece;

    return piecesImages.get(piece) as HTMLImageElement;
  },
};

export default PiecesCache;
