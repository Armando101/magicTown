import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import getUser from "../services/getUser";

import { Modal } from "@material-ui/core";

import "../styles/components/LoginForm.scss";

function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("incomplete");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.userInput.value || !e.target.passInput.value) {
      setModalType("incomplete");
      handleOpen();
      return;
    }

    getUser({
      username: e.target.userInput.value,
      password: e.target.passInput.value,
    })
      .then((user) => {
        delete user[0].password;
        setUser(user[0]);
        history.push("/home");
      })
      .catch((error) => {
        setModalType("not-found");
        handleOpen();
      });
  };

  const handleOpen = (e) => {
    setModalOpen(true);
  };

  const handleClose = (e) => {
    setModalOpen(false);
  };

  return (
    <div className="login-wrapper">
      <form action="" onSubmit={handleSubmit}>
        <h1>Inicio de Sesión</h1>
        <p>Bienvenido de vuelta a Pueblos Mágicos</p>
        <label htmlFor="user">Usuario</label>
        <input id="userInput" placeholder="Usuario" type="text" />
        <label htmlFor="pass">Contraseña</label>
        <input id="passInput" placeholder="Contraseña" type="password" />
        <button type="submit" className="button">
          <p>Iniciar Sesión</p>
        </button>

        <span>¿No tienes una cuenta?</span>
        <NavLink to="/register"> Registrate </NavLink>
      </form>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal modal--form">
          {modalType == "incomplete" ? (
            <h2 id="simple-modal-title">
              !Por favor, llene correctamente los campos!
            </h2>
          ) : (
            <h2 id="simple-modal-title">Usuario o Contraseña Incorrectos</h2>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default LoginForm;
