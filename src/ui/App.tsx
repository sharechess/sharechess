import type { Component } from "solid-js";
import type { DeepReadonly } from "solid-js/store";

import { Handlers } from "../types";
import { State } from "../state";

import Header from "./components/Header";
import GameTabs from "./components/GameTabs";
import SetupTabs from "./components/SetupTabs";

import "./App.css";

const App: Component<{ handlers: Handlers; state: DeepReadonly<State> }> = (
  props
) => {
  return (
    <>
      <Header handlers={props.handlers} />
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
    </>
  );
};

export default App;
