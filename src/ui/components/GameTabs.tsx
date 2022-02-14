import { Component, Switch, Match } from "solid-js";
import Moves from "./Moves";
import Controls from "./Controls";
import Load from "./Load";
import { Handlers } from "../../types";
import "./GameTabs.css";
import { setState, state } from "../../state";

const GameTabs: Component<{ moves: readonly string[]; handlers: Handlers }> = (
  props
) => {
  return (
    <div class="game-tabs">
      <div class="tabs">
        <button
          class={
            "game-tabs__btn" +
            (state.activeTab === "game" ? " game-tabs__btn--active" : "")
          }
          onClick={() => setState("activeTab", "game")}
        >
          GAME
        </button>
        <button
          class={
            "game-tabs__btn" +
            (state.activeTab === "load" ? " game-tabs__btn--active" : "")
          }
          onClick={() => setState("activeTab", "load")}
        >
          LOAD
        </button>
      </div>
      <Switch>
        <Match when={state.activeTab === "game"}>
          <Moves moves={props.moves} handlers={props.handlers} />
          <Controls handlers={props.handlers} />
        </Match>
        <Match when={state.activeTab === "load"}>
          <Load handlers={props.handlers} />
        </Match>
      </Switch>
    </div>
  );
};

export default GameTabs;
