import React from "react";
import Button from "./Button";
import "@styles/components/ProfileCover.scss";
import facebook from "../icons/facebook.svg";
import instagram from "@icons/instagram.svg";
import twitter from "@icons/twitter.svg";

const ProfileCover = ({ photo, name, year }) => {
  return (
    <section className="profile-cover">
      <img src={photo} alt={`${name} photo profile`} />
      <div className="profile-cover__user">
        <h3 className="profile-cover__user-name">{name}</h3>
        <p className="profile-cover__user-date">Se unió en {year}</p>
      </div>
      <Button type={"home"} label={"Editar perfil"} />
      <div className="profile-cover__social">
        <p>Redes sociales</p>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
    </section>
  );
};

export default ProfileCover;
