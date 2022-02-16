import { Component, For } from "solid-js";
import { Handlers, PiecesStyle } from "../../types";
import Scrollable from "./reusable/Scrollable";
import piecesSets from "../../board/styles-pieces";
import { state, setState } from "../../state";
import "./Pieces.css";

const pieces = Object.entries(piecesSets).map(([key, data]) => ({
  key,
  img: data.nw,
})) as { key: PiecesStyle; img: string }[];

const Pieces: Component<{ handlers: Handlers }> = (props) => {
  return (
    <Scrollable class="pieces">
      {
        <For each={pieces}>
          {(item) => (
            <img
              class={
                "pieces__ico" +
                (state.boardConfig.piecesStyle === item.key
                  ? " pieces__ico--active"
                  : "")
              }
              onClick={() => {
                setState("boardConfig", "piecesStyle", item.key);
                props.handlers.changePiecesStyle(item.key);
              }}
              src={item.img}
              title={item.key}
              draggable={false}
            />
          )}
        </For>
      }
    </Scrollable>
  );
};

export default Pieces;
