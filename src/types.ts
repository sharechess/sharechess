import { Move } from "chess.js";
import stylesBoard from "./board/styles-board/templates";
import { PiecesStyle } from "./board/styles-pieces/piecesStyles";

export type GradientDir =
  | "horizontal"
  | "vertical"
  | "diagonal-top"
  | "diagonal-bottom"
  | "radial";

export type GradientData = {
  dir: GradientDir;
  colors: string[];
  [key: string]: any;
};

export type Gradient = {
  type: "gradient";
  data: GradientData;
};

export type SolidData = {
  color: string;
  [key: string]: any;
};

export type Solid = {
  type: "solid";
  data: SolidData;
};

export type ImageData = {
  src: string;
  [key: string]: any;
};

export type Image = {
  type: "image";
  data: ImageData;
};

export type Coords = {
  onLight: string;
  onDark: string;
  onBorder: string;
};

export type SquareLayer = Gradient | Solid | Image;
export type SquareStyle = SquareLayer | SquareLayer[];

export type MoveIndicator = {
  color: string;
};

export type StyleCategory =
  | "solid"
  | "gradient"
  | "texture"
  | "custom"
  | "seasonal";

export type Style = {
  category: StyleCategory;
  background: SquareStyle;
  light: SquareStyle;
  dark: SquareStyle;
  moveIndicator: MoveIndicator;
  border: SquareStyle;
  coords: Coords;
};

export type PieceType = "k" | "q" | "r" | "b" | "n" | "p";

export type PieceColor = "b" | "w";

export type BoardData = ({
  type: PieceType;
  color: PieceColor;
} | null)[][];

export type BoardStyle = keyof typeof stylesBoard;

export type BoardConfig = {
  size: number;
  tiles: number;
  boardStyle: BoardStyle;
  piecesStyle: PiecesStyle;
  showBorder: boolean;
  showExtraInfo: boolean;
  showMaterial: boolean;
  showMoveIndicator: boolean;
  showChecks: boolean;
  showCoords: boolean;
  showShadows: boolean;
  flipped: boolean;
  puzzle: boolean;
};

export type Size = "XS" | "S" | "M" | "L" | "XL";

export type GameConfig = {
  titleScreen: boolean;
  format: "GIF" | "MP4" | "WebM";
  picSize: Size;
  animationSize: Size;
};

export type SiteConfig = {
  darkMode: boolean;
  sounds: boolean;
  speech: boolean;
  wrongBrowserPopup: boolean;
  androidAppPopup: boolean;
  iOSAppPopup: boolean;
};

export type Recent = {
  title: string;
  hash: string;
}[];

export type MaterialCount = {
  w: {
    p: number;
    n: number;
    b: number;
    r: number;
    q: number;
  };
  b: {
    p: number;
    n: number;
    b: number;
    r: number;
    q: number;
  };
};

export type Material = {
  sum: {
    w: number;
    b: number;
  };
  imbalance: MaterialCount;
  count: MaterialCount;
  diff: number;
};

export type Placement = {
  x: number;
  y: number;
  type: PieceType;
  color: PieceColor;
}[];

export type Position = {
  move: Move | null;
  ply: number;
  end: number;
  fen: string;
  check: boolean;
  mate: boolean;
  turn: PieceColor;
  material: Material;
  placement: Placement;
  last: boolean;
};

export type Handlers = {
  prev(): void;
  next(): void;
  first(): void;
  last(): void;
  toggleBorder(): void;
  showBorder(): void;
  hideBorder(): void;
  toggleExtraInfo(): void;
  toggleAnonymous(): void;
  toggleTitleScreen(): void;
  toggleShadows(): void;
  flip(): void;
  togglePlay(): void;
  goto(ply: number): void;
  changeBoardStyle: (style: BoardStyle) => void;
  changePiecesStyle: (style: PiecesStyle) => void;
  loadPGN: (pgn: string, side?: "w" | "b", ply?: number) => Promise<void>;
  loadFEN: (fen: string, hash?: boolean) => Promise<void>;
  importPGN: (link: string) => Promise<void>;
  load: (data: string) => Promise<boolean>;
  loadFromClipboard(): Promise<boolean>;
  downloadImage: () => Promise<void>;
  downloadAnimation: () => Promise<void>;
  toggleSound(): void;
  toggleSpeech(): void;
  toggleDarkMode(): void;
  openOnLichess: () => Promise<boolean>;
  toggleFavoritePieces(name: string): void;
  toggleFavoriteBoard(name: string): void;
  clearRecent(e: Event): void;
  deleteRecent(hash: string): void;
  loadGameOfTheDay(): void;
  randomStyle(): void;
  togglePuzzle(): void;
};

export type Header = {
  White: string;
  Black: string;
  WhitePretty: string;
  BlackPretty: string;
  WhiteElo: string | null;
  BlackElo: string | null;
  Date: string | null;
  DatePretty: string | null;
  Event: string | null;
  Round: string | null;
  Site: string | null;
  Result: string | null;
  PuzzleTitle: string | null;
  PuzzleMotif: string | null;
  PuzzleDescription: string | null;
};

export type LoadImage = (src: string) => Promise<HTMLImageElement>;

export type CreateCanvas = () => HTMLCanvasElement;
