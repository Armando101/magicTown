import React from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Button from "@components/Button";
import "@styles/components/FavoriteCard.scss";

const FavoritesCard = ({ img, name, stars, state }) => {
  return (
    <div className="favorite-card">
      <img
        className="favorite-card__image"
        src={img}
        alt={`Imagen de ${name}`}
      />
      <h3 className="favorite-card__name">{name}</h3>
      <h4 className="favorite-card__state">{state}</h4>
      <div className="favorite-card__footer">
        <FavoriteIcon />
        <Rating
          className="detail_stars"
          name="read-only"
          value={stars}
          readOnly
        />
        <Button label={"Ver más"} />
      </div>
    </div>
  );
};

export default FavoritesCard;
