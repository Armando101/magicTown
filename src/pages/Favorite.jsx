import React from "react";
import "@styles/pages/_Favorite.scss";
import ProfileCover from "../components/ProfileCover";
import Favorites from "@components/Favorites";

const user = {
  id: 0,
  photo: "https://avatars.githubusercontent.com/u/35951139?v=4",
  name: "Armando Rivera",
  year: 2020,
};

function Favorite() {
  return (
    <>
      <div className="favorite__cover"></div>
      <section>
        <ProfileCover {...user} />
        <Favorites />
      </section>
    </>
  );
}

export default Favorite;
