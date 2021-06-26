import React, { useContext } from "react";

import ProfileCard from "../../common/ProfileCard/ProfileCard";
import Button from "../../common/Button/Button";
import swal from "@sweetalert/with-react";

import { UserContext } from "../../../context/UserContext";
import { useForm } from "../../../hooks/useForm";
import { useHistory } from "react-router-dom";

import patchUserInfo from "../../../services/users/patchUserInfo";

import "../../../styles/components/Favorites.scss";
import "./UserInfo.scss";

export default function UserInfo() {
  const { user, setUser } = useContext(UserContext);

  const initialForm = {
    username: user.username,
    description: user.description,
    avatar: user.avatar,
  };

  const [formPatchUserValues, handlePatchUserInputChange, resetForm] =
    useForm(initialForm);
  const { username, description, avatar } = formPatchUserValues;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username && !description && !avatar) {
      return swal({
        title: "¡Por favor, llene correctamente los campos!",
        icon: "warning",
      });
    }

    try {
      swal({
        title: "¿Estas seguro que quieres cambiar tus datos?",
        icon: "warning",
        dangerMode: true,
        buttons: {
          cancel: {
            visible: true,
            text: "Cancelar",
          },
          confirm: {
            text: "Sí, cambiar mis datos",
          },
        },
      }).then(async (willChangeData) => {
        if (willChangeData) {
          await patchUserInfo(user.uid, {
            ...formPatchUserValues,
          });
          setUser(null);
          history.push("/login");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="favorites">
      <div className="favorites__content">
        <form onSubmit={handleSubmit} className="user-form">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder={user.username}
            onChange={handlePatchUserInputChange}
          />
          <label htmlFor="description">Descripción:</label>
          <textarea
            cols="10"
            rows="5"
            name="description"
            placeholder="Describete!"
            value={description}
            onChange={handlePatchUserInputChange}
          />
          <label htmlFor="avatar">Imagen de tu Avatar (URL):</label>
          <input
            type="url"
            name="avatar"
            value={avatar}
            onChange={handlePatchUserInputChange}
          />
          <Button label="Aplicar Cambios" />
        </form>
        <ProfileCard />
      </div>
    </section>
  );
}
