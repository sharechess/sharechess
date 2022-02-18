import { Component, Show } from "solid-js";
import { Handlers } from "../../types";
import { state } from "../../state";
import "./Info.css";
import isSafeLink from "../../utils/isSafeLink";
import isLink from "../../utils/isLink";

const Info: Component<{ handlers: Handlers }> = () => {
  return (
    <div class="info">
      <div className="info__players">
        <p>
          <button className="info__color info__color--white"></button>
          <Show when={!state.boardConfig.anonymous} fallback="Anonymous">
            {state.game.header.WhitePretty}{" "}
          </Show>
          <span className="info__rating">{state.game.header.WhiteElo}</span>
        </p>
        <p>
          <button className="info__color info__color--black"></button>
          <Show when={!state.boardConfig.anonymous} fallback="Anonymous">
            {state.game.header.BlackPretty}{" "}
          </Show>
          <span className="info__rating">{state.game.header.BlackElo}</span>
        </p>
      </div>
      <div className="info__event">
        <Show when={state.game.header.Event}>
          <p>{state.game.header.Event}</p>
        </Show>
        <Show when={state.game.header.Round}>
          <p>Round {state.game.header.Round}</p>
        </Show>
      </div>
      <div className="info__site">
        <Show when={state.game.header.Site}>
          <p>
            <Show
              when={
                !state.boardConfig.anonymous || !isLink(state.game.header.Site)
              }
            >
              <Show
                when={isSafeLink(state.game.header.Site)}
                fallback={state.game.header.Site}
              >
                <a href={state.game.header.Site ?? ""}>
                  {state.game.header.Site?.replace(/^https:\/\//, "")}
                </a>
              </Show>
            </Show>
          </p>
        </Show>
        <Show when={state.game.header.DatePretty}>
          <p>{state.game.header.DatePretty}</p>
        </Show>
      </div>
    </div>
  );
};

export default Info;
