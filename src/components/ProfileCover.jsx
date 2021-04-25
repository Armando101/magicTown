import React from "react";
import Button from "./Button";
import "@styles/components/ProfileCover.scss";
import facebook from "../icons/facebook.svg";

const ProfileCover = ({ photo, name, year }) => {
  return (
    <section className="profile-cover">
      <img src={photo} alt={`${name} photo profile`} />
      <div className="profile-cover__user">
        <h3>{name}</h3>
        <p>Se unió en {year}</p>
      </div>
      <Button type={"home"} label={"Editar perfil"} />
      <div>
        <p>Redes sociales</p>
        <img src={facebook} alt="" />
      </div>
    </section>
  );
};

export default ProfileCover;
