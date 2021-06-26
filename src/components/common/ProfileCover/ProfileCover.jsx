import React, { useState } from "react";

import Button from "../Button/Button";
import facebook from "../../../../public/assets/icons/facebook.svg";
import instagram from "../../../../public/assets/icons/instagram.svg";
import twitter from "../../../../public/assets/icons/twitter.svg";

import "./ProfileCover.scss";

const ProfileCover = (props) => {
  return (
    <section className="profile-cover">
      <img src={props.avatar} alt={`${props.username} photo profile`} />
      <div className="profile-cover__user">
        <h3 className="profile-cover__user-name">{props.username}</h3>
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
