import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "./Button";
import Avatar from "./Avatar";

import Popper from "@material-ui/core/Popper";

import "../styles/components/Navbar.scss";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const [togglePopper, setTogglePopper] = useState({
    anchorEl: null,
    openEl: false,
  });

  const { user, setUser } = useContext(UserContext);

  const handleTogglePopper = (e) => {
    const { currentTarget } = e;
    setTogglePopper({
      anchorEl: currentTarget,
      openEl: !togglePopper.openEl,
    });
  };

  const handleLogOut = (e) => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      {user != null ? (
        <>
          <NavLink to="/home" className="button button--home">
            <p>Inicio</p>
          </NavLink>
          <Button
            label=""
            type={`navbar-popper ${togglePopper.openEl ? "--clicked" : ""}`}
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
              <NavLink to="/home" className="button" onClick={handleLogOut}>
                <p>Cerrar Sesión</p>
              </NavLink>
            </div>
          </Popper>
          <Avatar userAvatar={user.avatar} />
        </>
      ) : (
        <>
          <NavLink to="/home" className="button button--home">
            <p>Inicio</p>
          </NavLink>
          <NavLink to="/register" className="button button--header">
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
