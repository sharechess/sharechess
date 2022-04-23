import { state } from "../state";

const saveConfig = (type: "board" | "game" | "site" | "recent") => {
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
  }
};

export default saveConfig;
