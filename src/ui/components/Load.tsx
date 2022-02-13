import { Component, createSignal } from "solid-js";
import { Handlers } from "../../types";
import readFile from "../../utils/readFile";
import "./Load.css";

const Load: Component<{ handlers: Handlers; showMoves: () => void }> = (
  props
) => {
  const [fen, setFEN] = createSignal("");
  const [pgn, setPGN] = createSignal("");

  return (
    <div class="load">
      <input
        class="load__fen-input"
        type="text"
        name="load-fen"
        placeholder="PASTE FEN..."
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
      <textarea
        class="load__pgn-input"
        name="load-pgn"
        placeholder="PASTE PGN..."
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
            props.showMoves();
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
            props.showMoves();
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
