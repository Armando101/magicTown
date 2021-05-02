import React, { useState } from "react";
import Button from "./Button";
import "@styles/components/ProfileCover.scss";
import facebook from "@icons/facebook.svg";
import instagram from "@icons/instagram.svg";
import twitter from "@icons/twitter.svg";
import { Modal } from "@material-ui/core";
import updtUserInfo from "../services/updtUserInfo";

const ProfileCover = (user) => {
  const initForm = {
    username: user.username,
    description: user.description,
    avatar: user.avatar,
  };

  const [form, setForm] = useState(initForm);
  const [isModalOpen, setModalOpen] = useState(false);
  const [areFormErrors, setFormErrors] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !e.target.username.value &&
      !e.target.description.value &&
      !e.target.avatar.value
    ) {
      setFormErrors(true);
      return;
    }

    await updtUserInfo(user.id, form).then((response) => {
      user.setUser(response);
    });
  };

  const handleOpen = (e) => {
    setModalOpen(true);
  };

  const handleClose = (e) => {
    setFormErrors(false);
    setForm(initForm);
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
          {areFormErrors && (
            <p className="modal__error">
              ¡Por favor, llene correctamente los campos!
            </p>
          )}

          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user.username}
            onChange={handleChange}
          />
          <label htmlFor="description">Nombre de Descripción:</label>
          <textarea
            cols="10"
            rows="10"
            name="description"
            id="description"
            placeholder="Describete!"
            onChange={handleChange}
          />
          <label htmlFor="avatar">Imagen de tu Avatar (URL):</label>
          <input type="url" name="avatar" id="avatar" onChange={handleChange} />
          <Button label="Aplicar Cambios" />
        </form>
      </Modal>
    </section>
  );
};

export default ProfileCover;
