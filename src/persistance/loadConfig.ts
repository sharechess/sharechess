import { PiecesStyle } from "./../board/styles-pieces/piecesStyles";
import { boardNames } from "../board/styles-board/boardStyles";
import piecesStyles from "../board/styles-pieces/piecesStyles";

const fixBoardConfig = (boardConfig: { [key: string]: string }) => {
  if (!boardNames.includes(boardConfig.boardStyle)) {
    delete boardConfig.boardStyle;
  }

  if (!piecesStyles.includes(boardConfig.piecesStyle as PiecesStyle)) {
    delete boardConfig.piecesStyle;
  }

  return boardConfig;
};

const loadConfig = () => {
  const boardConfig = localStorage.getItem("boardConfig");
  const gameConfig = localStorage.getItem("gameConfig");
  const siteConfig = localStorage.getItem("siteConfig");
  const recent = localStorage.getItem("recent");

  return {
    boardConfig:
      boardConfig === null ? {} : fixBoardConfig(JSON.parse(boardConfig)),
    gameConfig: gameConfig === null ? {} : JSON.parse(gameConfig),
    siteConfig: siteConfig === null ? {} : JSON.parse(siteConfig),
    recent: recent === null ? [] : JSON.parse(recent),
  };
};

export default loadConfig;
