import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import { useForm } from "../hooks/useForm";

import { Modal } from "@material-ui/core";

import register from "../services/auth/register";

import "../styles/components/LoginForm.scss";

function RegisterForm() {
  const { setUser } = useContext(UserContext);

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formRegisterValues;

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalErrorType, setModalErrorType] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setModalErrorType("Ingrese correctamente los campos");
      handleOpen();
      return;
    }

    register(username, password)
      .then((user) => {
        setUser(user);
        history.replace("/home");
      })
      .catch((error) => {
        setModalErrorType(error.message);
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
      <form onSubmit={handleSubmit} action="">
        <h1>Registro</h1>
        <p>Registrate para ser parte de las experiencias de otros viajeros</p>
        <label htmlFor="user">Crea tu Nombre de Usuario</label>
        <input
          name="username"
          placeholder="Usuario"
          type="text"
          value={username}
          onChange={handleRegisterInputChange}
        />
        <label htmlFor="password">Crea tu Contraseña</label>
        <input
          name="password"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={handleRegisterInputChange}
        />
        <button type="submit" className="button">
          <p>Registrarme</p>
        </button>

        <span>¿Ya eres Miembro?</span>
        <NavLink to="/login"> Inicia Sesión </NavLink>
      </form>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal modal--form">
          <h2 id="simple-modal-title">{modalErrorType}</h2>
        </div>
      </Modal>
    </div>
  );
}

export default RegisterForm;
