const loadConfig = () => {
  const boardConfig = localStorage.getItem("boardConfig");
  const gameConfig = localStorage.getItem("gameConfig");
  const siteConfig = localStorage.getItem("siteConfig");

  return {
    boardConfig: boardConfig === null ? {} : JSON.parse(boardConfig),
    gameConfig: gameConfig === null ? {} : JSON.parse(gameConfig),
    siteConfig: siteConfig === null ? {} : JSON.parse(siteConfig),
  };
};

export default loadConfig;
