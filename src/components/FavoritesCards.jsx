import React from "react";
import FavoritesCard from "./FavoritesCard";
import "@styles/components/FavoritesCards.scss";

const FavoritesCards = ({ cards, setFavorites }) => {
  return (
    <div className="favorites-cards">
      {cards.map((card) => (
        <FavoritesCard key={card.id} {...card} setFavorites={setFavorites} />
      ))}
    </div>
  );
};

export default FavoritesCards;
