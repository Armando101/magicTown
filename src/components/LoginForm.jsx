import React, { useContext, useEffect, useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import getUser from "../services/getUser";

import "../styles/components/LoginForm.scss";

function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser({
      username: e.target.userInput.value,
      password: e.target.passInput.value,
    }).then((user) => {
      delete user[0].password;
      setUser(user[0]);
      history.push("/home");
    });
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
    </div>
  );
}

export default LoginForm;
