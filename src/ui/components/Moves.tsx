import { Component, For } from "solid-js";
import chunk_ from "@arrows/array/chunk_";
import { Handlers } from "../../types";

const Moves: Component<{ moves: readonly string[]; handlers: Handlers }> = (
  props
) => {
  return (
    <div class="moves">
      <For each={chunk_(2, props.moves as string[])}>
        {(move, i) => {
          const [white, black] = move as [string, string];

          return (
            <p class="move">
              {i() + 1}.
              <span
                class="ply"
                onClick={() => props.handlers.goto(i() * 2 + 1)}
              >
                {white}
              </span>
              <span
                class="ply"
                onClick={() => props.handlers.goto(i() * 2 + 2)}
              >
                {black}
              </span>
            </p>
          );
        }}
      </For>
    </div>
  );
};

export default Moves;
