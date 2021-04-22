import React, { useState, useEffect } from "react";
import "../styles/components/Popper.scss";
import "../styles/components/Button.scss";

function Popper({ label, children }) {
  const [isVisible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!isVisible);

  return (
    <div className="button popper" onClick={handleVisible}>
      <div
        className={`popper__toggler ${
          isVisible ? "popper__toggler--clicked" : ""
        }`}
      >
        <p>{label}</p>

        <div
          className={`popper__info ${isVisible ? "popper__info--visible" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popper;
