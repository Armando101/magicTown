import React, { useState } from "react";

import Button from "./Button";
// import Popper from "./Popper";
import Avatar from "./Avatar";

import Popper from "@material-ui/core/Popper";

import "../styles/components/Navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar({ userInfo }) {
  const [togglePopper, setTogglePopper] = useState({
    anchorEl: null,
    openEl: false,
    clicked: false,
  });

  const handleTogglePopper = (e) => {
    const { currentTarget } = e;
    setTogglePopper({
      anchorEl: currentTarget,
      openEl: !togglePopper.openEl,
      clicked: !togglePopper.clicked,
    });
  };

  return (
    <nav className="navbar">
      {userInfo ? (
        <>
          <NavLink to="/home" className="button button--home">
            <p>Inicio</p>
          </NavLink>
          <Button
            label=""
            type={`navbar-popper ${togglePopper.clicked ? "--clicked" : ""}`}
            onClick={handleTogglePopper}
          />
          <Popper open={togglePopper.openEl} anchorEl={togglePopper.anchorEl}>
            <div className="navbar-menu">
              <NavLink to="/profile/favorites" className="button">
                <p>Mis favoritos</p>
              </NavLink>
              <NavLink to="/profile/reviews" className="button">
                <p>Mis reseñas</p>
              </NavLink>
              <NavLink to="/profile" className="button">
                <p>Cuenta</p>
              </NavLink>
              <NavLink to="/home" className="button">
                <p>Cerrar Sesión</p>
              </NavLink>
            </div>
          </Popper>
          <Avatar userInfo={userInfo} />
        </>
      ) : (
        <>
          <NavLink to="/home" className="button button--home">
            <p>Inicio</p>
          </NavLink>
          <NavLink to="/home" className="button button--header">
            <p>Registro</p>
          </NavLink>
          <NavLink to="/login" className="button button--header">
            <p>Iniciar Sesión</p>
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
