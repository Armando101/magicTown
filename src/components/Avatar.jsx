import React from "react";
import "../styles/components/Avatar.scss";

function Avatar({ userInfo }) {
  return (
    <div className="avatar">
      <img className="avatar__userphoto" src={userInfo} alt="profile photo" />
    </div>
  );
}

export default Avatar;
