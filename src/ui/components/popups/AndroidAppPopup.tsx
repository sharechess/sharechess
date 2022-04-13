import { Component, Show } from "solid-js";
import { setState, state } from "../../../state";
import Popup from "../reusable/Popup";
import saveConfig from "../../../persistance/saveConfig";

const AndroidAppPopup: Component = () => {
  return (
    <Show
      when={state.siteConfig.androidAppPopup && state.os?.includes("Android")}
    >
      <Popup
        onClose={() => {
          setState("siteConfig", "androidAppPopup", false);
          saveConfig("site");
        }}
        title="Tip"
      >
        <p>
          For easy access, you can install this website as a standalone app.
        </p>
        <ul>
          To do that:
          <li>open the website in Chrome,</li>
          <li>tap the menu icon (3 dots in the corner),</li>
          <li>
            tap{" "}
            <u>
              <b>Add to Home screen</b>
            </u>
            .
          </li>
        </ul>
      </Popup>
    </Show>
  );
};

export default AndroidAppPopup;
