import type { Component } from "solid-js";
import type { DeepReadonly } from "solid-js/store";
import Moves from "./components/Moves";
import Controls from "./components/Controls";
import Load from "./components/Load";
import { Handlers } from "../types";
import { State } from "../state";

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
        {/* <Moves moves={props.state.moves} handlers={props.handlers}></Moves> */}
        <Load></Load>
      </div>
    </div>
  );
};

export default App;
