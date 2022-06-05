import isMobile from "is-mobile";
import { createStore } from "solid-js/store";
import Game from "./game/Game";
import loadConfig from "./persistance/loadConfig";
import { BoardConfig, GameConfig, SiteConfig, Recent } from "./types";
import UAParser from "ua-parser-js";

const userAgent = UAParser();
const mobile = isMobile();
const saved = loadConfig();

const initialBoardConfig: BoardConfig = {
  size: 1024,
  tiles: 8,
  boardStyle: "standard",
  piecesStyle: "tatiana",
  showBorder: false,
  showExtraInfo: true,
  showMaterial: true,
  showMoveIndicator: true,
  showChecks: true,
  showCoords: true,
  showShadows: false,
  flipped: false,
};

const initialGameConfig: GameConfig = {
  titleScreen: true,
  format: "GIF",
  picSize: "M",
  animationSize: "M",
};

const initialSiteConfig: SiteConfig = {
  darkMode: true,
  sounds: true,
  speech: false,
  wrongBrowserPopup: true,
  androidAppPopup: true,
  iOSAppPopup: true,
};

export type TabName = "game" | "load" | "share" | "boards" | "pieces";
export type LeftTabName = "share" | "boards" | "pieces";

export type State = {
  boardConfig: BoardConfig;
  gameConfig: GameConfig;
  siteConfig: SiteConfig;
  game: Game;
  pgn: string;
  fen: string;
  moves: string[];
  ply: number;
  mobile: boolean;
  layout: "single" | "double" | "triple";
  activeTab: TabName;
  activeLeftTab: LeftTabName;
  playing: boolean;
  anonymous: boolean;
  refreshHash: boolean;
  browser?: string;
  os?: string;
  about: boolean;
  userStylesInfo: boolean;
  fullscreenPopup: "about" | "styles" | "support" | null;
  recent: Recent;
  favoritePieces: Set<string>;
  favoriteBoards: Set<string>;
  showFavoritePieces: boolean;
  showFavoriteBoards: boolean;
};

const initialState: State = {
  boardConfig: {
    ...initialBoardConfig,
    ...saved.boardConfig,
  },
  gameConfig: { ...initialGameConfig, ...saved.gameConfig },
  siteConfig: { ...initialSiteConfig, ...saved.siteConfig },
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
  activeLeftTab: "share",
  playing: false,
  anonymous: false,
  refreshHash: true,
  browser: userAgent.browser.name,
  os: userAgent.os.name,
  about: false,
  userStylesInfo: false,
  fullscreenPopup: null,
  recent: saved.recent,
  favoritePieces: saved.pieces as Set<string>,
  favoriteBoards: saved.boards as Set<string>,
  showFavoritePieces: saved.pieces.size > 0,
  showFavoriteBoards: saved.boards.size > 0,
};

const [state, setState] = createStore(initialState);

export { state, setState };
