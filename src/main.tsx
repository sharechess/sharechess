import WebFont from "webfontloader";
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

Promise.all([
  new Promise((resolve) =>
    WebFont.load({
      google: {
        families: ["Ubuntu:500,700", "Fira Mono:500"],
      },
      custom: {
        families: ["Chess"],
        urls: ["/fonts.css"],
      },
      active: () => resolve(null),
    })
  ).catch(() => null),
  new Promise((resolve) => {
    if (speechSynthesis.getVoices().length > 0) {
      resolve(null);
    } else {
      window.speechSynthesis.onvoiceschanged = resolve;
    }
  }).catch(() => null),
]).then(() => main());
