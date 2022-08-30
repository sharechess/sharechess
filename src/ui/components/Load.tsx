import { Component, createSignal, Show, For } from "solid-js";
import { Handlers } from "../../types";
import readFile from "../../utils/readFile";
import Scrollable from "./reusable/Scrollable";
import { setState, state } from "../../state";
import "./Load.css";

const Load: Component<{ handlers: Handlers; class?: string }> = (props) => {
  const [data, setData] = createSignal("");
  const [clipError, setClipError] = createSignal(false);
  const [inputError, setInputError] = createSignal(false);
  const [recentMore, setRecentMore] = createSignal(false);

  let filePicker: HTMLInputElement | undefined = undefined;

  return (
    <Scrollable class={"load" + (props.class ? ` ${props.class}` : "")}>
      <button
        classList={{ "load__game-btn": true, "btn--error": clipError() }}
        onClick={async () => {
          const success = await props.handlers.loadFromClipboard();

          if (!success) {
            setClipError(true);
            setTimeout(() => setClipError(false), 1000);
          }
        }}
      >
        <i class="las la-paste"></i>{" "}
        {clipError() ? "Incorrect data" : "Load from clipboard"}
      </button>
      <hr />
      <textarea
        class="load__game-input"
        name="load-game"
        placeholder="Paste PGN, FEN or Lichess link..."
        spellcheck={false}
        value={data()}
        onInput={(e) => setData(e.currentTarget.value)}
      ></textarea>
      <button
        classList={{ "load__game-btn": true, "btn--error": inputError() }}
        onClick={async () => {
          const success = await props.handlers.load(data());

          if (!success) {
            setInputError(true);
            setTimeout(() => setInputError(false), 1000);
          }
          setData("");
        }}
      >
        {inputError() ? "Incorrect data" : "LOAD"}
      </button>
      <hr />
      <input
        style={{ display: "none" }}
        type="file"
        accept="application/vnd.chess-pgn,application/x-chess-pgn,.pgn"
        ref={filePicker}
        onChange={async (e) => {
          const target = e.target as HTMLInputElement;
          if (target?.files && target.files.length > 0) {
            const content = await readFile(target.files[0]);
            setState("refreshHash", false);
            props.handlers.loadPGN(content);
          }
        }}
      ></input>
      <button
        class="load__pgn-btn load__pgn-file"
        onClick={() => {
          if (filePicker) {
            filePicker.click();
          }
        }}
      >
        Upload PGN file
      </button>

      <Show when={!state.mobile}>
        <div class="load__pgn-file-info">
          <p>or</p>
          <p>drop the PGN file anywhere on the page</p>
        </div>
      </Show>

      <hr />
      <p class="load__daily-game">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            props.handlers.loadGameOfTheDay();
          }}
        >
          Load game of the day
        </a>
      </p>
      <Show
        when={state.recent.filter((x) => x.hash !== location.hash).length > 0}
      >
        <h2>Recent:</h2>
        <ul class="load__recent">
          <For
            each={state.recent
              .filter((x) => x.hash !== location.hash)
              .slice(0, recentMore() ? undefined : 5)}
          >
            {(recent) => (
              <li class="load__recent-item">
                <a href={recent.hash}>{recent.title.split(" | ")[0]}</a>{" "}
                <i
                  class="las la-trash-alt load__recent-delete-item"
                  onClick={() => props.handlers.deleteRecent(recent.hash)}
                ></i>
              </li>
            )}
          </For>
        </ul>
        <p class="load__recent-options">
          <Show
            when={
              state.recent.filter((x) => x.hash !== location.hash).length > 5
            }
          >
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setRecentMore(!recentMore());
              }}
            >
              {recentMore() ? "show less" : "show more"}
            </a>{" "}
            |{" "}
          </Show>
          <a href="" onClick={props.handlers.clearRecent}>
            clear all
          </a>
        </p>
      </Show>
    </Scrollable>
  );
};

export default Load;
