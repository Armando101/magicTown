import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import Button from "../../Button/Button";
import Avatar from "../../Avatar/Avatar";

import Popper from "@material-ui/core/Popper";

import { UserContext } from "../../../../context/UserContext";

import swal from "@sweetalert/with-react";

import "./Navbar.scss";

function Navbar() {
  const { user, setUser, setUserFavorites } = useContext(UserContext);

  const [togglePopper, setTogglePopper] = useState({
    anchorEl: null,
    openEl: false,
  });

  const history = useHistory();

  const handleTogglePopper = (e) => {
    const { currentTarget } = e;
    setTogglePopper({
      anchorEl: currentTarget,
      openEl: !togglePopper.openEl,
    });
  };

  const handleOpen = (e) => {
    swal({
      title: "¿Cerrar sesión?",
      text: "¿Estas seguro que quieres cerrar sesión?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          visible: true,
          text: "Cancelar",
        },
        confirm: {
          text: "Sí, cerrar sesión",
        },
      },
    }).then((willLoggOut) => {
      if (willLoggOut) {
        handleLogOut();
      }
    });
  };

  const handleLogOut = (e) => {
    setUser(null);
    setUserFavorites(null);

    localStorage.removeItem("token");

    history.push("/home");
  };

  return (
    <nav className="navbar modal-parent">
      {user != null ? (
        user.role != "Admin" ?         <>
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
              <Button
                label="Cerrar Sesión"
                className="button "
                onClick={handleOpen}
              />
            </div>
          </Popper>
          <Avatar userInfo={user.avatar} />       
          </> : 
          <>
            <NavLink to="/admin/dashboard" className="button button--home">
              <p>Inicio</p>
            </NavLink>
            <Button
                label="Cerrar Sesión"
                type="header"
                onClick={handleOpen}
              />
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
