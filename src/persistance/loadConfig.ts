const loadConfig = () => {
  const boardConfig = localStorage.getItem("boardConfig");
  const gameConfig = localStorage.getItem("gameConfig");

  return {
    boardConfig: boardConfig === null ? {} : JSON.parse(boardConfig),
    gameConfig: gameConfig === null ? {} : JSON.parse(gameConfig),
  };
};

export default loadConfig;
