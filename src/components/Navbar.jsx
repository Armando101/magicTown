import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import Button from "./Button";
import Avatar from "./Avatar";

import Popper from "@material-ui/core/Popper";

import "../styles/components/Navbar.scss";
import { UserContext } from "../context/UserContext";
import { Modal } from "@material-ui/core";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const [togglePopper, setTogglePopper] = useState({
    anchorEl: null,
    openEl: false,
  });

  const [isOpen, setOpen] = useState(false);

  const history = useHistory();

  const handleTogglePopper = (e) => {
    const { currentTarget } = e;
    setTogglePopper({
      anchorEl: currentTarget,
      openEl: !togglePopper.openEl,
    });
  };

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  const handleLogOut = (e) => {
    setUser(null);
    history.push("/home");
  };

  return (
    <nav className="navbar modal-parent">
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
              <NavLink to="/profile" className="button">
                <p>Mis reseñas</p>
              </NavLink>
              <NavLink to="/profile" className="button">
                <p>Cuenta</p>
              </NavLink>
              <Button
                label="Cerrar Sesión"
                className="button "
                onClick={handleOpen}
              />
            </div>
          </Popper>
          <Avatar userInfo={user.avatar} />
          <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className="modal">
              <h2 id="simple-modal-title">
                ¿Estas seguro que quieres cerrar tu sesión?
              </h2>
              <Button label="Sí" onClick={handleLogOut} />
              <Button label="No" onClick={handleClose} />
            </div>
          </Modal>
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
