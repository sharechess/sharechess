import { Component, Switch, Match } from "solid-js";
import { Handlers } from "../../types";
import "./SetupTabs.css";
import Share from "./Share";
import Boards from "./Boards";
import Pieces from "./Pieces";
import Tab from "./reusable/Tab";
import { LeftTabName, setState, state } from "../../state";

const setTab = (name: string) => setState("activeLeftTab", name as LeftTabName);

const SetupTabs: Component<{
  handlers: Handlers;
}> = (props) => {
  return (
    <div class="setup">
      <div class="setup-tabs">
        <Tab
          name="share"
          setTab={setTab}
          isActive={state.activeLeftTab === "share"}
        >
          <i class="las la-share"></i> SHARE
        </Tab>
        <Tab
          name="boards"
          setTab={setTab}
          isActive={state.activeLeftTab === "boards"}
        >
          <i class="las la-chess-board"></i> BOARDS
        </Tab>
        <Tab
          name="pieces"
          setTab={setTab}
          isActive={state.activeLeftTab === "pieces"}
        >
          <i class="las la-chess"></i> PIECES
        </Tab>
      </div>
      <Switch>
        <Match when={state.activeLeftTab === "share"}>
          <Share handlers={props.handlers}></Share>
        </Match>
        <Match when={state.activeLeftTab === "boards"}>
          <Boards handlers={props.handlers}></Boards>
        </Match>
        <Match when={state.activeLeftTab === "pieces"}>
          <Pieces handlers={props.handlers}></Pieces>
        </Match>
      </Switch>
    </div>
  );
};

export default SetupTabs;
