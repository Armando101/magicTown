import React, { useContext } from "react";

import FavoritesCard from "./FavoritesCard/FavoritesCard";
import ProfileCard from "../../common/ProfileCard/ProfileCard";

import { UserContext } from "../../../context/UserContext";

import "../../../styles/components/Favorites.scss";

const Favorites = () => {
  const { userFavorites } = useContext(UserContext);

  return (
    <section className="favorites">
      <h3 className="favorites__title">Mis favoritos</h3>
      <div className="favorites__content">
        <div className="favorites-cards">
          {userFavorites &&
            userFavorites.map((town) => (
              <FavoritesCard key={town.id} {...town} />
            ))}
        </div>
        <ProfileCard />
      </div>
    </section>
  );
};

export default Favorites;
