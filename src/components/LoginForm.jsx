import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import { Modal } from "@material-ui/core";

import { useForm } from "../hooks/useForm";

import login from "../services/auth/login";
import getUserFavorites from "../services/favorites/getUserFavorites";

import "../styles/components/LoginForm.scss";

function LoginForm() {
  const { setUser, setUserFavorites } = useContext(UserContext);

  const [formLoginValues, handleLoginInputChange] = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formLoginValues;

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const MODAL_ERRORS = {
    INCOMPLETE: "!Por favor, llene correctamente los campos!",
    NOT_FOUND: "Usuario o Contraseña Incorrectos",
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setModalType("INCOMPLETE");
      handleOpen();
      return;
    }

    login(username, password)
      .then((user) => {
        setUser(user);
        history.goBack();
      })
      .then(() => {
        getUserFavorites(user.uid).then((favorites) => {
          setUserFavorites(favorites);
        });
      })
      .catch((error) => {
        setModalType("NOT_FOUND");
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
        <label htmlFor="username">Usuario</label>
        <input
          placeholder="Usuario"
          type="text"
          name="username"
          value={username}
          onChange={handleLoginInputChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          placeholder="Contraseña"
          type="password"
          name="password"
          value={password}
          onChange={handleLoginInputChange}
        />
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
      >
        <div className="modal modal--form">
          <h2 id="simple-modal-title">{MODAL_ERRORS[modalType]}</h2>
        </div>
      </Modal>
    </div>
  );
}

export default LoginForm;
