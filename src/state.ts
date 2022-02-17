import isMobile from "is-mobile";
import { createStore } from "solid-js/store";
import Game from "./game/Game";
import { BoardConfig, GameConfig } from "./types";

const mobile = isMobile();

const boardConfig: BoardConfig = {
  size: 1024,
  tiles: 8,
  boardStyle: "calm",
  piecesStyle: "tatiana",
  showBorder: !mobile,
  showExtraInfo: true,
  showMaterial: true,
  showMoveIndicator: true,
  showChecks: true,
  showCoords: true,
  flipped: false,
  anonymous: false,
};

const gameConfig: GameConfig = {
  titleScreen: true,
  fromPly: null,
  toPly: null,
  loop: true,
  format: "GIF",
  picSize: "M",
  animationSize: "M",
};

export type State = {
  boardConfig: BoardConfig;
  gameConfig: GameConfig;
  game: Game;
  pgn: string;
  fen: string;
  moves: string[];
  ply: number;
  mobile: boolean;
  activeTab: "game" | "load";
};

const initialState: State = {
  boardConfig,
  gameConfig,
  game: new Game(),
  pgn: "",
  fen: "",
  moves: [],
  ply: 0,
  mobile,
  activeTab: "load",
};

const [state, setState] = createStore(initialState);

export { state, setState };
