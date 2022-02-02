import { Handlers } from "./../types";
import { html } from "common-tags";

class Controls {
  constructor(private element: HTMLElement, handlers: Handlers) {
    this.element.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (target?.dataset?.type === "control") {
        const action = target?.dataset?.action;
        console.log(action);
        if (action && handlers.hasOwnProperty(action)) {
          // @ts-ignore
          handlers[action]();
        }
      }
    });
  }

  load() {
    const content = html`<div class="controls">
      <button data-type="control" data-action="first">FIRST</button>  
      <button data-type="control" data-action="prev">PREV</button>  
      <button data-type="control" data-action="togglePlay">PLAY/PAUSE</button>  
      <button data-type="control" data-action="next">NEXT</button>  
      <button data-type="control" data-action="last">LAST</button>  
      <button data-type="control" data-action="flip">FLIP</button>  
      <button data-type="control" data-action="toggleBorder">TOGGLE BORDER</button>  
      <button data-type="control" data-action="toggleExtraInfo">TOGGLE EXTRA INFO</button>  
    </ul> `;

    this.element.innerHTML = content;

    return this;
  }
}

export default Controls;
