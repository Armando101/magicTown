import React from "react";
import "../styles/components/Button.scss";

function Button({ label, type }) {
  return (
    <a className={!type ? `button` : `button button--${type}`}>
      <p>{label}</p>
    </a>
  );
}

export default Button;
