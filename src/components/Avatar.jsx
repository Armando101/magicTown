import React from "react";
import "../styles/components/Avatar.scss";

function Avatar({ userAvatar }) {
  return (
    <div className="avatar">
      <img className="avatar__userphoto" src={userAvatar} alt="profile photo" />
    </div>
  );
}

export default Avatar;
