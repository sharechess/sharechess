import { state } from "../state";

const saveConfig = (
  type: "board" | "game" | "site" | "recent" | "pieces" | "boards"
) => {
  switch (type) {
    case "board":
      localStorage.setItem("boardConfig", JSON.stringify(state.boardConfig));
      break;
    case "game":
      localStorage.setItem("gameConfig", JSON.stringify(state.gameConfig));
      break;
    case "site":
      localStorage.setItem("siteConfig", JSON.stringify(state.siteConfig));
      break;
    case "recent":
      localStorage.setItem("recent", JSON.stringify(state.recent));
      break;
    case "pieces":
      localStorage.setItem("pieces", JSON.stringify([...state.favoritePieces]));
      break;
    case "boards":
      localStorage.setItem("boards", JSON.stringify([...state.favoriteBoards]));
      break;
  }
};

export default saveConfig;
