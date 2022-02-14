import { Component, createSignal } from "solid-js";
import { Handlers } from "../../types";
import readFile from "../../utils/readFile";
import "./Load.css";

const Load: Component<{ handlers: Handlers }> = (props) => {
  const [fen, setFEN] = createSignal("");
  const [pgn, setPGN] = createSignal("");
  const [link, setLink] = createSignal("");

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
        class="upload load__pgn-file"
        type="file"
        accept="application/vnd.chess-pgn,application/x-chess-pgn,.pgn"
        onChange={async (e) => {
          const target = e.target as HTMLInputElement;
          if (target?.files && target.files.length > 0) {
            const content = await readFile(target.files[0]);
            props.handlers.loadPGN(content);
          }
        }}
      ></input>
      <div className="load__pgn-file-info">
        <p>or</p>
        <p>drop the PGN file anywhere on the page</p>
      </div>
    </div>
  );
};

export default Load;
