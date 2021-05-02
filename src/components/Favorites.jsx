import React, { useEffect, useState } from "react";
import FavoritesCards from "./FavoritesCards";
import "@styles/components/favorites.scss";

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
      <h3>Mis favoritos</h3>
      <FavoritesCards cards={favorites} setFavorites={setFavorites} />
    </section>
  );
};

export default Favorites;
