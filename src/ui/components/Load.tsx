import { Component, createSignal, Show } from "solid-js";
import { Handlers } from "../../types";
import readFile from "../../utils/readFile";
import { state } from "../../state";
import "./Load.css";

const Load: Component<{ handlers: Handlers; class?: string }> = (props) => {
  const [data, setData] = createSignal("");

  let filePicker: HTMLInputElement | undefined = undefined;

  return (
    <div class={"load" + (props.class ? ` ${props.class}` : "")}>
      <textarea
        class="load__game-input"
        name="load-game"
        placeholder="Paste PGN, FEN or Lichess link..."
        spellcheck={false}
        value={data()}
        onInput={(e) => setData(e.currentTarget.value)}
      ></textarea>
      <button
        class="load__game-btn"
        onClick={() => {
          if (data()) {
            props.handlers.load(data());
            setData("");
          }
        }}
      >
        LOAD
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
        UPLOAD PGN FILE
      </button>

      <Show when={!state.mobile}>
        <div className="load__pgn-file-info">
          <p>or</p>
          <p>drop the PGN file anywhere on the page</p>
        </div>
      </Show>
    </div>
  );
};

export default Load;
