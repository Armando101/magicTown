import React from "react";
import "./Button.scss";

function Button({ label, type, onClick }) {
  return (
    <button
      className={`button ${!type ? "" : `button--${type}`}`}
      onClick={onClick}
    >
      <p>{label}</p>
    </button>
  );
}

export default Button;
