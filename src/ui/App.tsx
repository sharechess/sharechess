import type { Component } from "solid-js";
import type { DeepReadonly } from "solid-js/store";
import Controls from "./components/Controls";
import { Handlers } from "../types";
import { State } from "../state";
import GameTabs from "./components/GameTabs";

import "./app.css";

const App: Component<{ handlers: Handlers; state: DeepReadonly<State> }> = (
  props
) => {
  return (
    <div class="layout">
      <div id="setup" class="setup-box"></div>
      <div id="board" class="board-box"></div>
      <div id="controls" class="controls-box">
        <Controls handlers={props.handlers}></Controls>
      </div>
      <div id="moves" class="moves-box">
        <GameTabs
          moves={props.state.moves}
          handlers={props.handlers}
        ></GameTabs>
      </div>
    </div>
  );
};

export default App;
