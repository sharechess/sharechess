import { Component, Show } from "solid-js";
import type { DeepReadonly } from "solid-js/store";

import { Handlers } from "../types";
import { setState, State, state } from "../state";

import Header from "./components/Header";
import GameTabs from "./components/GameTabs";
import SetupTabs from "./components/SetupTabs";
import Controls from "./components/Controls";
import Popup from "./components/Popup";

import "./App.css";
import saveConfig from "../persistance/saveConfig";

const App: Component<{ handlers: Handlers; state: DeepReadonly<State> }> = (
  props
) => {
  return (
    <div classList={{ light: !state.siteConfig.darkMode }}>
      <Header handlers={props.handlers} />
      <div class="layout">
        <Show when={state.layout === "triple"}>
          <div id="setup" class="setup-box">
            <SetupTabs handlers={props.handlers}></SetupTabs>
          </div>
        </Show>
        <div
          id="board"
          classList={{
            "board-box": true,
            "board-box--left": state.layout === "double",
          }}
        >
          <canvas class="board" id="canvas"></canvas>
          <Show when={state.layout === "single"}>
            <Controls handlers={props.handlers} />
          </Show>
        </div>
        <div id="moves" class="game-box">
          <GameTabs
            moves={props.state.moves}
            handlers={props.handlers}
          ></GameTabs>
        </div>
      </div>
      <Show when={state.siteConfig.wrongBrowserPopup}>
        <Popup
          handlers={props.handlers}
          onClose={() => {
            setState("siteConfig", "wrongBrowserPopup", false);
            saveConfig("site");
          }}
        >
          {state.browser} | {state.os}
        </Popup>
      </Show>
    </div>
  );
};

export default App;
