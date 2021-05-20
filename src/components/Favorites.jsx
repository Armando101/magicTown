import React, { useEffect, useState, useContext } from "react";

import FavoritesCards from "./FavoritesCards";
import ProfileCard from "./ProfileCard";

import { UserContext } from "../context/UserContext";

import "../styles/components/favorites.scss";

const Favorites = () => {
  const { userFavorites } = useContext(UserContext);

  return (
    <section className="favorites">
      <h3 className="favorites__title">Mis favoritos</h3>
      <div className="favorites__content">
        <FavoritesCards cards={userFavorites} />
        <ProfileCard />
      </div>
    </section>
  );
};

export default Favorites;
