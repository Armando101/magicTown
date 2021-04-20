import React from "react";
import "../styles/components/Button.scss";

function Button({ label }) {
  return (
    <a className="button">
      <p>{label}</p>
    </a>
  );
}

export default Button;
