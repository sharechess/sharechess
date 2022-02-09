import { Component, createSignal, Switch, Match } from "solid-js";
import { Handlers } from "../../types";
import "./SetupTabs.css";
import Share from "./Share";
import Boards from "./Boards";
import Pieces from "./Pieces";

const SetupTabs: Component<{ handlers: Handlers }> = (props) => {
  const [tab, setTab] = createSignal("share");

  return (
    <div class="setup">
      <div class="tabs">
        <button
          class={
            "setup-tabs__btn" +
            (tab() === "share" ? " setup-tabs__btn--active" : "")
          }
          onClick={() => setTab("share")}
        >
          <i class="las la-share"></i> SHARE
        </button>
        <button
          class={
            "setup-tabs__btn" +
            (tab() === "boards" ? " setup-tabs__btn--active" : "")
          }
          onClick={() => setTab("boards")}
        >
          <i class="las la-chess-board"></i> BOARDS
        </button>
        <button
          class={
            "setup-tabs__btn" +
            (tab() === "pieces" ? " setup-tabs__btn--active" : "")
          }
          onClick={() => setTab("pieces")}
        >
          <i class="las la-chess"></i> PIECES
        </button>
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
