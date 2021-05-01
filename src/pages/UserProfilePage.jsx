import React from "react";
import AboutUser from "../components/AboutUser";
import ProfileCover from "../components/ProfileCover";

const user = {
  id: 0,
  photo: "https://avatars.githubusercontent.com/u/35951139?v=4",
  name: "Armando Rivera",
  year: 2020,
};

const UserProfilePage = () => {
  return (
    <>
      <div className="favorite__cover"></div>
      <section>
        <ProfileCover {...user} />
        <AboutUser />
      </section>
    </>
  );
};

export default UserProfilePage;
