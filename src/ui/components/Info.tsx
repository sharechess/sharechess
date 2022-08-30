import { Component, Show, createSignal } from "solid-js";
import { Handlers } from "../../types";
import { state } from "../../state";
import "./Info.css";
import isSafeLink from "../../utils/isSafeLink";
import isLink from "../../utils/isLink";

const Info: Component<{ handlers: Handlers }> = (props) => {
  const [error, setError] = createSignal(false);

  return (
    <div class="info">
      <div class="info__header">
        <div class="info__players">
          <div class="info__player">
            <div class="info__left">
              <button class="info__color info__color--white"></button>
              <Show when={!state.anonymous} fallback="Anonymous">
                <span contenteditable={false}>
                  {state.game.header.WhitePretty}
                </span>{" "}
              </Show>
              <Show when={state.game.header.WhiteElo}>
                <span class="info__rating">
                  {" "}
                  ({state.game.header.WhiteElo})
                </span>
              </Show>
            </div>
            <div class="info__right">
              <span class="info__score">
                {state.game.header.Result === "1-0"
                  ? "1"
                  : state.game.header.Result === "0-1"
                  ? "0"
                  : state.game.header.Result === "1/2-1/2"
                  ? "1/2"
                  : ""}
              </span>
            </div>
          </div>
          <div class="info__player">
            <div class="info__left">
              <button class="info__color info__color--black"></button>
              <Show when={!state.anonymous} fallback="Anonymous">
                <span contenteditable={false}>
                  {state.game.header.BlackPretty}
                </span>{" "}
              </Show>
              <Show when={state.game.header.BlackElo}>
                <span class="info__rating">
                  {" "}
                  ({state.game.header.BlackElo})
                </span>
              </Show>
            </div>
            <div class="info__right">
              <span class="info__score">
                {state.game.header.Result === "1-0"
                  ? "0"
                  : state.game.header.Result === "0-1"
                  ? "1"
                  : state.game.header.Result === "1/2-1/2"
                  ? "1/2"
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div class="info__event">
          <Show when={state.game.header.Event}>
            <p>{state.game.header.Event}</p>
          </Show>
          <Show when={state.game.header.Round}>
            <p>Round {state.game.header.Round}</p>
          </Show>
        </div>
        <div class="info__site">
          <Show when={state.game.header.Site}>
            <p>
              <Show when={!state.anonymous || !isLink(state.game.header.Site)}>
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
      <div class="info__analyze">
        <button
          onClick={async () => {
            const success = await props.handlers.openOnLichess();

            if (!success) {
              setError(true);
              setTimeout(() => setError(false), 1000);
            }
          }}
          classList={{ "btn--error": error() }}
        >
          <i class="las la-vial"></i>{" "}
          {error() ? "Cannot import to lichess" : "Analyze on Lichess"}
        </button>
      </div>
    </div>
  );
};

export default Info;
