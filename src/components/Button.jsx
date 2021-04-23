import React from "react";
import "../styles/components/Button.scss";

function Button({ label, type, onClick }) {
  return (
    <a
      className={!type ? `button` : `button button--${type}`}
      onClick={onClick}
    >
      <p>{label}</p>
    </a>
  );
}

export default Button;
