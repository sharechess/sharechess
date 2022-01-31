import { Move } from "chess.js";

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

export type SquareStyle = Gradient | Solid | Image;

export type MoveIndicator =
  | { type: "hueShift"; data: number }
  | { type: "color"; data: string };

export type Style = {
  name: string;
  category: "mono" | "colorful" | "gradient" | "material" | "pic" | "custom";
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

export type Piece =
  | "kw"
  | "qw"
  | "rw"
  | "bw"
  | "nw"
  | "pw"
  | "kb"
  | "qb"
  | "rb"
  | "bb"
  | "nb"
  | "pb";

export type PiecesStyle =
  | "alpha"
  | "cardinal"
  | "cburnett"
  | "fantasy"
  | "gioco"
  | "horsey"
  | "merida"
  | "staunty"
  | "tatiana";

export type BoardConfig = {
  size: number;
  boardStyle: Style;
  piecesStyle: PiecesStyle;
  showBorder: boolean;
  showExtraInfo: boolean;
  showMaterial: boolean;
  showMoveIndicator: boolean;
  showChecks: boolean;
  showCoords: boolean;
  flipped: boolean;
};

export type GameConfig = {
  titleScreen: boolean;
  fromPly: number | null;
  toPly: number | null;
  loop: boolean;
};

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
