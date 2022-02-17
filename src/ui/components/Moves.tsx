import { Component, For, Show, createEffect } from "solid-js";
import chunk_ from "@arrows/array/chunk_";
import { Handlers } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Moves.css";
import { state } from "../../state";

const Moves: Component<{ moves: readonly string[]; handlers: Handlers }> = (
  props
) => {
  createEffect(() => {
    if (!state.mobile) {
      document.querySelector(`[data-ply="${state.ply}"]`)?.scrollIntoView();
    }
  });

  return (
    <Scrollable class="moves">
      <Show when={props.moves.length === 0}>
        <p class="moves__turn">
          {state.game.getPosition(0).turn === "w" ? "White" : "Black"} to move.
        </p>
      </Show>
      <For each={chunk_(2, props.moves as string[])}>
        {(move, i) => {
          const [white, black] = move as [string, string];

          return (
            <div class="move">
              <span class="move__id">{i() + 1}.</span>
              <span
                classList={{
                  move__ply: true,
                  "move__ply--current": state.ply === i() * 2 + 1,
                }}
                onClick={() => props.handlers.goto(i() * 2 + 1)}
                data-ply={i() * 2 + 1}
              >
                {white}
              </span>
              <span
                classList={{
                  move__ply: true,
                  "move__ply--current": state.ply === i() * 2 + 2,
                }}
                onClick={() => props.handlers.goto(i() * 2 + 2)}
                data-ply={i() * 2 + 2}
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
