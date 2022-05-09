const piecesStyles = [
  "adventurer",
  "alfonso_x",
  "alpha",
  "anarchy",
  "anarchy_candy",
  "anarchy_fresh",
  "anarchy_sepia",
  "berlin",
  "california",
  "cardinal",
  "cases",
  "cburnett",
  "checkers",
  "chess7",
  "chessnut",
  "companion",
  "condal",
  "dubrovny",
  "fantasy",
  "fresca",
  "gioco",
  "governor",
  "harlequin",
  "horsey",
  "icpieces",
  "kingdom",
  "kosal",
  "leipzig",
  "letter",
  "libra",
  "line",
  "lucena",
  "maestro",
  "magnetic",
  "mark",
  "marroquin",
  "maya",
  "mediaeval",
  "merida",
  "millennia",
  "motif",
  "pirat",
  "pirouetti",
  "pixel",
  "regular",
  "reillycraig",
  "riohacha",
  "shapes",
  "smart",
  "spatial",
  "staunty",
  "symmetric",
  "tatiana",
  "tfb",
  "traveller",
  "utrecht",
  "wisdom",
] as const;

export const pieceNames = [
  "bb",
  "bw",
  "kb",
  "kw",
  "nb",
  "nw",
  "pb",
  "pw",
  "qb",
  "qw",
  "rb",
  "rw",
] as const;

export type PiecesStyle = typeof piecesStyles[number];

export type PieceName = typeof pieceNames[number];

export default piecesStyles;
