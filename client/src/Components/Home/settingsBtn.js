import React from "react";
import "./settingsBtn.css";
import icon from "./settings.png"

function SettingsBtn(props) {

  return (
    <>
    <img {...props} className="logoutGear" src={icon} alt={"settings"} />
    </>
  );
}

export default SettingsBtn;
