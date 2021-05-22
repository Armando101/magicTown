import React, { useState } from "react";

import Button from "./Button";
import facebook from "../../public/assets/icons/facebook.svg";
import instagram from "../../public/assets/icons/instagram.svg";
import twitter from "../../public/assets/icons/twitter.svg";
import { Modal } from "@material-ui/core";

import { useForm } from "../hooks/useForm";

import patchUserInfo from "../services/users/patchUserInfo";

import "@styles/components/ProfileCover.scss";
import { useHistory } from "react-router";

const ProfileCover = (user) => {
  const initialForm = {
    username: user.username,
    description: user.description,
    avatar: user.avatar,
  };
  const [formPatchUserValues, handlePatchUserInputChange, resetForm] =
    useForm(initialForm);
  const { username, description, avatar } = formPatchUserValues;

  const [isModalOpen, setModalOpen] = useState(false);
  const [isErrorInForm, setErrorInForm] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username && !description && !avatar) {
      setErrorInForm(true);
      return;
    }

    patchUserInfo(user.uid, { ...formPatchUserValues }).then((updatedUser) => {
      user.setUser(null);
      history.push("/login");
    });
  };

  const handleOpen = (e) => {
    setModalOpen(true);
  };

  const handleClose = (e) => {
    resetForm();
    setErrorInForm(false);
    setModalOpen(false);
  };

  return (
    <section className="profile-cover">
      <img src={user.avatar} alt={`${user.username} photo profile`} />
      <div className="profile-cover__user">
        <h3 className="profile-cover__user-name">{user.username}</h3>
      </div>
      <Button onClick={handleOpen} type={"home"} label={"Editar perfil"} />
      <div className="profile-cover__social">
        <p>Redes sociales</p>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
      <Modal open={isModalOpen} onClose={handleClose}>
        <form onSubmit={handleSubmit} className="modal modal--user-form">
          {isErrorInForm && (
            <p className="modal__error">
              ¡Por favor, llene correctamente los campos!
            </p>
          )}

          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder={user.username}
            onChange={handlePatchUserInputChange}
          />
          <label htmlFor="description">Nombre de Descripción:</label>
          <textarea
            cols="10"
            rows="10"
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
      </Modal>
    </section>
  );
};

export default ProfileCover;
