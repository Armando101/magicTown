import React from "react";
import "@styles/components/ProfileCard.scss";
import { NavLink } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h3 className="profile-card__profile">Tu perfil</h3>
      <NavLink
        to="/profile/favorites"
        className="button button--home profile-card__favorites"
      >
        <p>Mis favoritos</p>
      </NavLink>
      <NavLink
        to="/profile/reviews"
        className="button button--home profile-card__opinions"
      >
        <p>Mis reseñas</p>
      </NavLink>
      <NavLink
        to="/profile"
        className="button button--home profile-card__opinions"
      >
        <p>Mi información</p>
      </NavLink>
    </div>
  );
};

export default ProfileCard;
