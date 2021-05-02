import React from "react";
import Button from "./Button";
import "@styles/components/ProfileCover.scss";
import facebook from "@icons/facebook.svg";
import instagram from "@icons/instagram.svg";
import twitter from "@icons/twitter.svg";

const ProfileCover = ({ avatar, username }) => {
  return (
    <section className="profile-cover">
      <img src={avatar} alt={`${username} photo profile`} />
      <div className="profile-cover__user">
        <h3 className="profile-cover__user-name">{username}</h3>
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
