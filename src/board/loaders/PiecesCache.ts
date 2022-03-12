import { PieceType, PieceColor } from "../../types";
import {
  PiecesStyle,
  pieceNames,
  PieceName,
} from "../styles-pieces/piecesStyles";
import loadImage from "./loadImage";

let style: PiecesStyle | null = null;
let piecesImages: Map<string, HTMLImageElement> = new Map();

const PiecesCache = {
  async load(piecesSetName: PiecesStyle) {
    await Promise.all(
      pieceNames.map((key) => {
        const src = `/pieces/${piecesSetName}/${key}.svg`;
        return loadImage(src).then((img) => {
          piecesImages.set(key, img);
        });
      })
    );
  },

  async get(
    piecesSetName: PiecesStyle,
    pieceName: PieceType,
    pieceColor: PieceColor
  ) {
    if (style !== piecesSetName) {
      await this.load(piecesSetName);
      style = piecesSetName;
    }

    const piece = `${pieceName}${pieceColor}` as PieceName;

    return piecesImages.get(piece) as HTMLImageElement;
  },
};

export default PiecesCache;
