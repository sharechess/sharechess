import { Component, For } from "solid-js";
import chunk_ from "@arrows/array/chunk_";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Moves.css";

const Moves: Component<{ moves: readonly string[]; handlers: Handlers }> = (
  props
) => {
  return (
    <Scrollable class="moves">
      <For each={chunk_(2, props.moves as string[])}>
        {(move, i) => {
          const [white, black] = move as [string, string];

          return (
            <div class="move">
              <span class="move__id">{i() + 1}.</span>
              <span
                class="move__ply"
                onClick={() => props.handlers.goto(i() * 2 + 1)}
              >
                {white}
              </span>
              <span
                class="move__ply"
                onClick={() => props.handlers.goto(i() * 2 + 2)}
              >
                {black}
              </span>
            </div>
          );
        }}
      </For>
    </Scrollable>
  );
};

export default Moves;