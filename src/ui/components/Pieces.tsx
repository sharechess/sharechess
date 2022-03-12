import { Component, For } from "solid-js";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import piecesSets, {
  PiecesStyle,
} from "../../board/styles-pieces/piecesStyles";
import { state, setState } from "../../state";

import "./Pieces.css";

const pieces = piecesSets.map((key) => ({
  key,
  img: `/pieces/${key}/nw.svg`,
})) as { key: PiecesStyle; img: string }[];

const Pieces: Component<{ handlers: Handlers; class?: string }> = (props) => {
  return (
    <Scrollable class={"pieces" + (props.class ? ` ${props.class}` : "")}>
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
              title={item.key as string}
              draggable={false}
            />
          )}
        </For>
      }
    </Scrollable>
  );
};

export default Pieces;
