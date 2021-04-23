import React, { useState } from "react";

import Button from "./Button";
// import Popper from "./Popper";
import Avatar from "./Avatar";

import Popper from "@material-ui/core/Popper";

import "../styles/components/Navbar.scss";

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
          <Button label="Inicio" type="home" />
          <Button
            label=""
            type={`navbar-popper ${togglePopper.clicked ? "--clicked" : ""}`}
            onClick={handleTogglePopper}
          />
          <Popper open={togglePopper.openEl} anchorEl={togglePopper.anchorEl}>
            <div className="navbar-menu">
              <Button label="Mis favoritos" />
              <Button label="Mis reseñas" />
              <Button label="Cuenta" />
              <Button label="Cerrar Sesión" />
            </div>
          </Popper>
          <Avatar userInfo={userInfo} />
        </>
      ) : (
        <>
          <Button label="Inicio" type="home" />
          <Button label="Registro" type="header" />
          <Button label="Iniciar Sesión" type="header" />
        </>
      )}
    </nav>
  );
}

export default Navbar;
