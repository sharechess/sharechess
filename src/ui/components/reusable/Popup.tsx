import { Component } from "solid-js";

import "./Popup.css";

const Popup: Component<{
  onClose: () => void;
  title: string;
}> = (props) => {
  return (
    <div className="popup">
      <div className="popup__box">
        <button className="popup__close" onClick={props.onClose}>
          <i class="las la-times"></i>
        </button>
        <h2 className="popup__title">{props.title}</h2>
        <div className="popup__content">{props.children}</div>
      </div>
    </div>
  );
};

export default Popup;
