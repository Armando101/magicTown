import React from "react";
import "../styles/components/Button.scss";

function Button({ label, type, onClick }) {
  return (
    <button
      className={!type ? `button` : `button button--${type}`}
      onClick={onClick}
    >
      <p>{label}</p>
    </button>
  );
}

export default Button;
