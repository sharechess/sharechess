import { Component, createSignal, Switch, Match } from "solid-js";
import Moves from "./Moves";
import Controls from "./Controls";
import Load from "./Load";
import { Handlers } from "../../types";
import "./GameTabs.css";

const GameTabs: Component<{ moves: readonly string[]; handlers: Handlers }> = (
  props
) => {
  const [tab, setTab] = createSignal("load");

  return (
    <div class="game-tabs">
      <div class="tabs">
        <button
          class={
            "game-tabs__btn" +
            (tab() === "moves" ? " game-tabs__btn--active" : "")
          }
          onClick={() => setTab("moves")}
        >
          MOVES
        </button>
        <button
          class={
            "game-tabs__btn" +
            (tab() === "load" ? " game-tabs__btn--active" : "")
          }
          onClick={() => setTab("load")}
        >
          LOAD
        </button>
      </div>
      <Switch>
        <Match when={tab() === "moves"}>
          <Moves moves={props.moves} handlers={props.handlers} />
          <Controls handlers={props.handlers} />
        </Match>
        <Match when={tab() === "load"}>
          <Load handlers={props.handlers} showMoves={() => setTab("moves")} />
        </Match>
      </Switch>
    </div>
  );
};

export default GameTabs;
