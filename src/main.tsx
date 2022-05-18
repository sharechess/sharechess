import { render } from "solid-js/web";

import Board from "./board/Board";
import Player from "./player/Player";
import App from "./ui/App";

import { state, setState } from "./state";

import registerHandlers from "./boot/registerHandlers";
import loadFromUrl from "./boot/loadFromUrl";
import registerEvents from "./boot/registerEvents";

const main = async () => {
  const board = new Board(state.boardConfig);
  const player = new Player(board, state.gameConfig);

  /* Connect player to the state */

  player.watch((playing) => setState("playing", playing));

  /* Register handlers */

  const handlers = registerHandlers(player, board);

  /* Render the page */

  render(
    () => <App handlers={handlers} state={state} />,
    document.getElementById("root") as HTMLElement
  );

  /* Connect canvas */
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  await board.setCanvas(canvas);

  /* Initialize the game */

  await player.init();
  await loadFromUrl(false, handlers, board);

  /* Register events */

  registerEvents(handlers, board);
};

/* Initialize */

main();
