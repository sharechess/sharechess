import { Component, createSignal, Show } from "solid-js";
import { Handlers } from "../../types";
import readFile from "../../utils/readFile";
import { state } from "../../state";
import "./Load.css";

const Load: Component<{ handlers: Handlers }> = (props) => {
  const [fen, setFEN] = createSignal("");
  const [pgn, setPGN] = createSignal("");
  const [link, setLink] = createSignal("");

  let filePicker: HTMLInputElement | undefined = undefined;

  return (
    <div class="load">
      <input
        class="load__fen-input"
        type="text"
        name="load-fen"
        placeholder="Paste FEN..."
        spellcheck={false}
        value={fen()}
        onInput={(e) => setFEN(e.currentTarget.value)}
      />
      <button
        class="load__fen-btn"
        onClick={() => {
          if (fen()) {
            props.handlers.loadFEN(fen());
            setFEN("");
          }
        }}
      >
        LOAD FEN
      </button>
      <hr />
      <input
        class="load__link-input"
        type="text"
        name="load-link"
        placeholder="Paste lichess link..."
        spellcheck={false}
        value={link()}
        onInput={(e) => setLink(e.currentTarget.value)}
      />
      <button
        class="load__link-btn"
        onClick={() => {
          if (link()) {
            props.handlers.importPGN(link());
            setLink("");
          }
        }}
      >
        IMPORT GAME
      </button>
      <hr />
      <textarea
        class="load__pgn-input"
        name="load-pgn"
        placeholder="Paste PGN..."
        spellcheck={false}
        value={pgn()}
        onInput={(e) => setPGN(e.currentTarget.value)}
      ></textarea>
      <button
        class="load__pgn-btn"
        onClick={() => {
          if (pgn()) {
            props.handlers.loadPGN(pgn());
            setPGN("");
          }
        }}
      >
        LOAD PGN
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
