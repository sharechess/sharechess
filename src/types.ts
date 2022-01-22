export type GradientDir =
  | "horizontal"
  | "vertical"
  | "diagonal-top"
  | "diagonal-bottom"
  | "radial";

export type GradientData = {
  dir: GradientDir;
  colors: string[];
};

export type Gradient = {
  type: "gradient";
  data: GradientData;
};

export type SolidData = {
  color: string;
};

export type Solid = {
  type: "solid";
  data: SolidData;
};

export type ImageData = {
  src: string;
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
