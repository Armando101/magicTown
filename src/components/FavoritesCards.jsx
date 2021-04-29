import React from "react";
import FavoritesCard from "./FavoritesCard";
import "@styles/components/FavoritesCards.scss";

const FavoritesCards = ({ cards }) => {
  return (
    <div className="favorites-cards">
      {cards.map((card) => (
        <FavoritesCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default FavoritesCards;
