import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../../../context/UserContext";

import { useForm } from "../../../hooks/useForm";

import register from "../../../services/auth/register";

import "../../../styles/components/AuthForm.scss";

function RegisterForm() {
  const { setUser } = useContext(UserContext);

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formRegisterValues;

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      openModal("¡Por favor, llene correctamente los campos!");
      return;
    }

    try {
      const registeredUser = await register(username, password);
      setUser(registeredUser);

      history.replace("/home");
    } catch (error) {
      openModal(error.message);
    }
  };

  const openModal = (error) => {
    return swal({
      title: error,
      icon: "warning",
    });
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
    </div>
  );
}

export default RegisterForm;
