import React, { useEffect, useState } from "react";
import FavoritesCards from "./FavoritesCards";
import "../styles/components/favorites.scss";
import ProfileCard from "./ProfileCard";

import getUserFavorites from "../services/getUserFavorites";

const Favorites = ({ id }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(async () => {
    await getUserFavorites(id).then((towns) => {
      setFavorites(towns);
    });
  }, []);

  return (
    <section className="favorites">
      <h3 className="favorites__title">Mis favoritos</h3>
      <div className="favorites__content">
        <FavoritesCards cards={favorites} />
        <ProfileCard />
      </div>
    </section>
  );
};

export default Favorites;
