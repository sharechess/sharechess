import { Component, createSignal, Switch, Match } from "solid-js";
import { Handlers } from "../../types";
import "./SetupTabs.css";

const SetupTabs: Component<{ handlers: Handlers }> = (props) => {
  const [tab, setTab] = createSignal("share");

  return (
    <div class="setup">
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
      <Switch>
        <Match when={tab() === "share"}>
          <div class="temp">SHARE</div>
        </Match>
        <Match when={tab() === "boards"}>
          <div class="temp">BOARDS</div>
        </Match>
        <Match when={tab() === "pieces"}>
          <div class="temp">PIECES</div>
        </Match>
      </Switch>
    </div>
  );
};

export default SetupTabs;
