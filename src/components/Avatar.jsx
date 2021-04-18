import React from "react";
import "../styles/components/Avatar.scss";

function Avatar({ userInfo }) {
  return (
    <div className="avatar">
      <p className="avatar__username">{userInfo.username}</p>
      <img
        className="avatar__userphoto"
        src={userInfo.profilePhoto}
        alt="profile photo"
      />
    </div>
  );
}

export default Avatar;
