import { Component, For } from "solid-js";
import piecesSets, {
  PiecesStyle,
} from "../../board/styles-pieces/piecesStyles";

import "./PiecesGallery.css";

const pieces = piecesSets
  .map((key, index) => ({
    n: index + 1,
    key,
    imgW: `/pieces/${key}/nw.svg`,
    imgB: `/pieces/${key}/nb.svg`,
  }))
  .slice(0) as {
  n: number;
  key: PiecesStyle;
  imgW: string;
  imgB: string;
}[];

const PiecesGallery: Component = () => {
  return (
    <div class="pieces-gallery">
      {
        <For each={pieces}>
          {(item) => (
            <div class="pieces-gallery__ico">
              <span class="pieces-gallery__label">{item.n}</span>
              <img
                class="pieces-gallery__piece pieces-gallery__piece--black"
                src={item.imgB}
                draggable={false}
              />
              <img
                class="pieces-gallery__piece pieces-gallery__piece--white"
                src={item.imgW}
                draggable={false}
              />
            </div>
          )}
        </For>
      }
    </div>
  );
};

export default PiecesGallery;
