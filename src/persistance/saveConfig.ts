import { state } from "../state";

const saveConfig = (type: "board" | "game") =>
  type === "board"
    ? localStorage.setItem("boardConfig", JSON.stringify(state.boardConfig))
    : localStorage.setItem("gameConfig", JSON.stringify(state.gameConfig));

export default saveConfig;
