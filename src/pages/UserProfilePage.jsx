import React, { useContext } from "react";
import AboutUser from "../components/AboutUser";
import ProfileCover from "../components/ProfileCover";

import { UserContext } from "../context/UserContext";

const UserProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="favorite__cover"></div>
      <section>
        <ProfileCover {...user} setUser={setUser} />
        <AboutUser {...user} />
      </section>
    </>
  );
};

export default UserProfilePage;
