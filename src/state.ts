import isMobile from "is-mobile";
import { createStore } from "solid-js/store";
import Game from "./game/Game";
import loadConfig from "./persistance/loadConfig";
import { BoardConfig, GameConfig } from "./types";

const mobile = isMobile();

const saved = loadConfig();

const initialBoardConfig: BoardConfig = {
  size: 1024,
  tiles: 8,
  boardStyle: "standard",
  piecesStyle: "tatiana",
  showBorder: !mobile,
  showExtraInfo: true,
  showMaterial: true,
  showMoveIndicator: true,
  showChecks: true,
  showCoords: true,
  flipped: false,
};

const initialGameConfig: GameConfig = {
  titleScreen: true,
  format: "GIF",
  picSize: "M",
  animationSize: "M",
};

export type TabName = "game" | "load" | "share" | "boards" | "pieces";

export type State = {
  boardConfig: BoardConfig;
  gameConfig: GameConfig;
  game: Game;
  pgn: string;
  fen: string;
  moves: string[];
  ply: number;
  mobile: boolean;
  layout: "single" | "double" | "triple";
  activeTab: TabName;
  playing: boolean;
  anonymous: boolean;
  refreshHash: boolean;
};

const initialState: State = {
  boardConfig: {
    ...initialBoardConfig,
    ...saved.boardConfig,
  },
  gameConfig: { ...initialGameConfig, ...saved.gameConfig },
  game: new Game(),
  pgn: "",
  fen: "",
  moves: [],
  ply: 0,
  mobile,
  layout:
    window.innerWidth < window.innerHeight
      ? "single"
      : window.innerWidth < 1366
      ? "double"
      : "triple",
  activeTab: "load",
  playing: false,
  anonymous: false,
  refreshHash: true,
};

console.log(initialState);

const [state, setState] = createStore(initialState);

export { state, setState };
