import { Component, Switch, Match, Show } from "solid-js";
import Moves from "./Moves";
import Controls from "./Controls";
import Info from "./Info";
import Load from "./Load";
import Share from "./Share";
import Boards from "./Boards";
import Pieces from "./Pieces";
import Tab from "./reusable/Tab";
import { Handlers } from "../../types";
import { setState, state, TabName } from "../../state";
import "./GameTabs.css";

const setTab = (tab: TabName) => {
  setState("activeTab", tab);
};

const GameTabs: Component<{ moves: readonly string[]; handlers: Handlers }> = (
  props
) => {
  return (
    <div class="game">
      <div class="game-tabs">
        <Tab name="game" setTab={setTab} isActive={state.activeTab === "game"}>
          GAME
        </Tab>
        <Tab name="load" setTab={setTab} isActive={state.activeTab === "load"}>
          LOAD
        </Tab>
        <Show when={state.layout !== "triple"}>
          <Tab
            name="share"
            setTab={setTab}
            isActive={state.activeTab === "share"}
          >
            <i class="las la-share"></i>
          </Tab>
          <Tab
            name="boards"
            setTab={setTab}
            isActive={state.activeTab === "boards"}
          >
            <i class="las la-chess-board"></i>
          </Tab>
          <Tab
            name="pieces"
            setTab={setTab}
            isActive={state.activeTab === "pieces"}
          >
            <i class="las la-chess"></i>
          </Tab>
        </Show>
      </div>
      <Switch>
        <Match when={state.activeTab === "game"}>
          <Info handlers={props.handlers}></Info>
          <Moves
            moves={props.moves}
            handlers={props.handlers}
            class={state.layout === "single" ? "span2" : undefined}
          />
          <Show when={state.layout !== "single"}>
            <Controls handlers={props.handlers} />
          </Show>
        </Match>
        <Match when={state.activeTab === "load"}>
          <Load handlers={props.handlers} class="span3" />
        </Match>
        <Show when={state.layout !== "triple"}>
          <Match when={state.activeTab === "share"}>
            <Share handlers={props.handlers} class="span3" />
          </Match>
          <Match when={state.activeTab === "boards"}>
            <Boards handlers={props.handlers} class="span3" />
          </Match>
          <Match when={state.activeTab === "pieces"}>
            <Pieces handlers={props.handlers} class="span3" />
          </Match>
        </Show>
      </Switch>
    </div>
  );
};

export default GameTabs;
