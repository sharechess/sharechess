import { PieceType, PieceColor, Piece } from "../../types";
import piecesSets from "../styles-pieces";
import loadImage from "./loadImage";

const images: Map<string, HTMLImageElement> = new Map();

const PiecesCache = {
  async get(
    piecesSetName: keyof typeof piecesSets,
    pieceName: PieceType,
    pieceColor: PieceColor
  ) {
    const piece = `${pieceName}${pieceColor}` as Piece;
    const key = `${piecesSetName}_${piece}`;
    if (!images.has(key)) {
      const pieceSrc = piecesSets[piecesSetName][piece];
      const img = await loadImage(pieceSrc);

      images.set(key, img);
    }

    return images.get(key) as HTMLImageElement;
  },
};

export default PiecesCache;
