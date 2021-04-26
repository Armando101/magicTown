import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import "../styles/components/Button.scss";

import "../styles/pages/NotFound.scss";

function NotFoundPage() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <div className="notfound__copy">
        <h2>Oops!</h2>
        <p>Parece que te perdiste...</p>
        <NavLink to="/home" className="button">
          <p>De regreso al inicio</p>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFoundPage;
