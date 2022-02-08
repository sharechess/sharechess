import type { Component } from "solid-js";
import type { DeepReadonly } from "solid-js/store";

import { Handlers } from "../types";
import { State } from "../state";

import Controls from "./components/Controls";
import GameTabs from "./components/GameTabs";
import SetupTabs from "./components/SetupTabs";

import "./App.css";

const App: Component<{ handlers: Handlers; state: DeepReadonly<State> }> = (
  props
) => {
  return (
    <div class="layout">
      <div id="setup" class="setup-box">
        <SetupTabs handlers={props.handlers}></SetupTabs>
      </div>
      <div id="board" class="board-box"></div>
      <div id="moves" class="game-box">
        <GameTabs
          moves={props.state.moves}
          handlers={props.handlers}
        ></GameTabs>
      </div>
    </div>
  );
};

export default App;
