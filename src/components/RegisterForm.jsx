import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/LoginForm.scss";

function RegisterForm() {
  return (
    <div className="login-wrapper">
      <form action="">
        <h1>Registro</h1>
        <p>Registrate para ser parte de las experiencias de otros viajeros</p>
        <label htmlFor="user">Crea tu Nombre de Usuario</label>
        <input id="userInput" placeholder="Usuario" type="text" />
        <label htmlFor="pass">Crea tu Contraseña</label>
        <input id="passInput" placeholder="Contraseña" type="password" />
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
