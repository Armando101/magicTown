import React, { useContext } from "react";
import "@styles/pages/_Favorite.scss";
import ProfileCover from "../components/ProfileCover";
import Favorites from "@components/Favorites";
import { UserContext } from "../context/UserContext";

function Favorite() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="favorite__cover"></div>
      <section>
        <ProfileCover {...user} />
        <Favorites {...user} />
      </section>
    </>
  );
}

export default Favorite;
