import React from "react";
import "@styles/components/ProfileCard.scss";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h3 className="profile-card__profile">Tu perfil</h3>
      <p className="profile-card__favorites">Mis favoritos</p>
      <p className="profile-card__opinions">Mis reseñas</p>
    </div>
  );
};

export default ProfileCard;
