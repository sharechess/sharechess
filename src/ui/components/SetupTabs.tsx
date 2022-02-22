import { Component, createSignal, Switch, Match } from "solid-js";
import { Handlers } from "../../types";
import "./SetupTabs.css";
import Share from "./Share";
import Boards from "./Boards";
import Pieces from "./Pieces";
import Tab from "./reusable/Tab";

const SetupTabs: Component<{
  handlers: Handlers;
}> = (props) => {
  const [tab, setTab] = createSignal("share");

  return (
    <div class="setup">
      <div class="setup-tabs">
        <Tab name="share" setTab={setTab} isActive={tab() === "share"}>
          <i class="las la-share"></i> SHARE
        </Tab>
        <Tab name="boards" setTab={setTab} isActive={tab() === "boards"}>
          <i class="las la-chess-board"></i> BOARDS
        </Tab>
        <Tab name="pieces" setTab={setTab} isActive={tab() === "pieces"}>
          <i class="las la-chess"></i> PIECES
        </Tab>
      </div>
      <Switch>
        <Match when={tab() === "share"}>
          <Share handlers={props.handlers}></Share>
        </Match>
        <Match when={tab() === "boards"}>
          <Boards handlers={props.handlers}></Boards>
        </Match>
        <Match when={tab() === "pieces"}>
          <Pieces handlers={props.handlers}></Pieces>
        </Match>
      </Switch>
    </div>
  );
};

export default SetupTabs;
