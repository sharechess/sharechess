import { html } from "common-tags";
import Player from "../player/Player";
import chunk_ from "@arrows/array/chunk_";

class Moves {
  constructor(private element: HTMLElement, private player: Player) {
    this.element.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (target?.dataset?.type === "ply") {
        const ply = Number(target?.dataset?.ply);
        this.player.goto(ply);
      }
    });
  }

  load(moves: string[]) {
    const items = chunk_(2, moves).map(
      ([white, black], i) =>
        html`<p>
          ${i + 1}. <span data-type="ply" data-ply=${i * 2 + 1}>${white}</span>
          <span data-type="ply" data-ply=${i * 2 + 2}>${black}</span>
        </p>`
    );

    const content = html`<div class="moves">
      ${items.join("\n")}
    </ul> `;

    this.element.innerHTML = content;

    return this;
  }
}

export default Moves;
