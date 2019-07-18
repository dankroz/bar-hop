import React from "react";
import "./settingsBtn.css";
import icon from "./settings.png"

function SettingsBtn(props) {

  return (
    <>
        <button {...props} className="settingsBtn" id="settingsBtn">
            <img className="logoutGear" src={icon} alt={"settings"} />
        </button>
    </>
  );
}

export default SettingsBtn;
