import { Handlers } from "./../types";
import { state, setState } from "../state";
import loadFromUrl from "./loadFromUrl";
import readFile from "../utils/readFile";
import Board from "../board/Board";

const registerEvents = (handlers: Handlers, board: Board) => {
  document.addEventListener("dblclick", function (el) {
    el.preventDefault();
  });

  window.addEventListener("resize", () => {
    setState(
      "layout",
      window.innerWidth < window.innerHeight
        ? "single"
        : window.innerWidth < 1366
        ? "double"
        : "triple"
    );
  });

  window.addEventListener("hashchange", () => {
    if (!state.refreshHash) {
      setState("refreshHash", true);
      return;
    }

    loadFromUrl(true, handlers, board);
  });

  if (!state.mobile) {
    const keyMapping: { [key: string]: () => void } = {
      ArrowLeft: handlers.prev,
      ArrowRight: handlers.next,
      ArrowUp: handlers.first,
      ArrowDown: handlers.last,
      f: handlers.flip,
      " ": handlers.togglePlay,
      Enter: handlers.openOnLichess,
      l: handlers.loadFromClipboard.bind(handlers),
      a: handlers.toggleAnonymous,
      b: handlers.toggleBorder,
      i: handlers.toggleExtraInfo,
      h: handlers.toggleTitleScreen,
      s: handlers.toggleShadows,
    };

    document.addEventListener("keydown", (e) => {
      const target = e.target as HTMLElement | null;

      if (
        keyMapping[e.key] &&
        target?.nodeName !== "INPUT" &&
        target?.nodeName !== "TEXTAREA"
      ) {
        e.preventDefault();
        keyMapping[e.key]();
      }
    });

    const preventDefaults = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      document.addEventListener(eventName, preventDefaults, false);
    });

    document.addEventListener("drop", async (e) => {
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        const content = await readFile(e.dataTransfer.files[0]);
        setState("refreshHash", false);
        handlers.loadPGN(content);
      }
    });
  }
};

export default registerEvents;
