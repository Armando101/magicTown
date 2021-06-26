import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../../../context/UserContext";

import { useForm } from "../../../hooks/useForm";

import login from "../../../services/auth/login";
import getUserFavorites from "../../../services/favorites/getUserFavorites";

import "../../../styles/components/AuthForm.scss";
import swal from "@sweetalert/with-react";

function LoginForm() {
  const { setUser, setUserFavorites } = useContext(UserContext);

  const [formLoginValues, handleLoginInputChange] = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formLoginValues;

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      openModal("¡Por favor, llene correctamente los campos!");
      return;
    }

    try {
      const loggedUser = await login(username, password);
      setUser(loggedUser);

      const userFavorites = await getUserFavorites(loggedUser.uid);
      setUserFavorites(userFavorites);

      loggedUser.role != "Admin"
        ? history.goBack()
        : history.push("/admin/dashboard");
    } catch (error) {
      openModal("Usuario o Contraseña Incorrectos");
    }
  };

  const openModal = (error) => {
    swal({
      title: error,
      icon: "warning",
    });
    return;
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
    </div>
  );
}

export default LoginForm;
