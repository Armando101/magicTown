import React from "react";
import "../styles/components/Button.scss";

function Button(props) {
  return (
    <a className="button">
      <p>{props.label}</p>
    </a>
  );
}

export default Button;
