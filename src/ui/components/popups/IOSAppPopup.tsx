import { Component, Show } from "solid-js";
import { setState, state } from "../../../state";
import Popup from "../reusable/Popup";
import saveConfig from "../../../persistance/saveConfig";

const IOSAppPopup: Component = () => {
  return (
    <Show when={state.siteConfig.iOSAppPopup && state.os?.includes("iOS")}>
      <Popup
        onClose={() => {
          setState("siteConfig", "iOSAppPopup", false);
          saveConfig("site");
        }}
        title="Tip"
      >
        <p>
          For easy access, you can install this website as a standalone app.
        </p>
        <ul>
          To do that:
          <li>open the website in Safari,</li>
          <li>tap the Share icon,</li>
          <li>
            tap{" "}
            <u>
              <b>Add to Home Screen</b>
            </u>
            .
          </li>
        </ul>
      </Popup>
    </Show>
  );
};

export default IOSAppPopup;
