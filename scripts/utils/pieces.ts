const piecesNames = {
  p: "pawn",
  b: "bishop",
  r: "rook",
  n: "knight",
  q: "queen",
  k: "king",
};

const piecesColors = {
  b: "black",
  w: "white",
};

const chessComLiveIds: { [key: string]: number[] } = {
  wr: [1, 8],
  wn: [2, 7],
  wb: [3, 6],
  wq: [4],
  wk: [5],
  wp: [9, 10, 11, 12, 13, 14, 15, 16],
  br: [25, 32],
  bn: [26, 31],
  bb: [27, 30],
  bq: [28],
  bk: [29],
  bp: [17, 18, 19, 20, 21, 22, 23, 24],
};

const pieces = { colors: piecesColors, names: piecesNames, chessComLiveIds };

export default pieces;
