import { Component, createSignal, Show } from "solid-js";
import { Handlers } from "../../types";
import readFile from "../../utils/readFile";
import Scrollable from "./reusable/Scrollable";
import { setState, state } from "../../state";
import "./Load.css";

const Load: Component<{ handlers: Handlers; class?: string }> = (props) => {
  const [data, setData] = createSignal("");
  const [clipError, setClipError] = createSignal(false);
  const [inputError, setInputError] = createSignal(false);

  let filePicker: HTMLInputElement | undefined = undefined;

  return (
    <Scrollable class={"load" + (props.class ? ` ${props.class}` : "")}>
      <button
        classList={{ "load__game-btn": true, "btn--error": clipError() }}
        onClick={async () => {
          const clip = await navigator.clipboard.readText();
          const success = await props.handlers.load(clip);

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
        <div className="load__pgn-file-info">
          <p>or</p>
          <p>drop the PGN file anywhere on the page</p>
        </div>
      </Show>
    </Scrollable>
  );
};

export default Load;
