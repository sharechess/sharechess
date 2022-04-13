import { Component, Show } from "solid-js";
import { setState, state } from "../../../state";
import Popup from "../reusable/Popup";
import saveConfig from "../../../persistance/saveConfig";

const WrongBrowserPopup: Component = () => {
  return (
    <Show
      when={
        !state.siteConfig.iOSAppPopup &&
        state.siteConfig.wrongBrowserPopup &&
        state.os === "iOS" &&
        !state.browser?.includes("Safari")
      }
    >
      <Popup
        onClose={() => {
          setState("siteConfig", "wrongBrowserPopup", false);
          saveConfig("site");
        }}
        title="Note"
      >
        <p>Saving files may not work correctly in this browser.</p>
        <p>
          To enjoy the full functionality of the website, please open it in{" "}
          <u>
            <b>Safari</b>
          </u>
          .
        </p>
      </Popup>
    </Show>
  );
};

export default WrongBrowserPopup;
