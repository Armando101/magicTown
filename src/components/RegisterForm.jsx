import React, { useState, useContext } from "react";

import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import getUser from "../services/getUser";

import "../styles/components/LoginForm.scss";

import { Modal } from "@material-ui/core";

function RegisterForm() {
  const initForm = {
    username: "",
    password: "",
    description: "",
    avatar:
      "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub_t.jpg",
    favorites: [],
  };

  const { user, setUser } = useContext(UserContext);

  const [form, setForm] = useState(initForm);
  const [isModalOpen, setModalOpen] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      handleOpen();
      return;
    }

    await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const newUser = await getUser(form.username, form.password);

    setUser(newUser);

    history.push("/home");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
          id="userInput"
          placeholder="Usuario"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="password">Crea tu Contraseña</label>
        <input
          name="password"
          id="passInput"
          placeholder="Contraseña"
          type="password"
          onChange={handleChange}
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
          <h2 id="simple-modal-title">
            !Por favor, llene correctamente los campos!
          </h2>
        </div>
      </Modal>
    </div>
  );
}

export default RegisterForm;
