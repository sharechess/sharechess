import { Component } from "solid-js";

import "./Popup.css";

const Popup: Component<{
  onClose: () => void;
  title: string;
}> = (props) => {
  return (
    <div class="popup">
      <div class="popup__box">
        <button class="popup__close" onClick={props.onClose}>
          <i class="las la-times"></i>
        </button>
        <h2 class="popup__title">{props.title}</h2>
        <div class="popup__content">{props.children}</div>
      </div>
    </div>
  );
};

export default Popup;
