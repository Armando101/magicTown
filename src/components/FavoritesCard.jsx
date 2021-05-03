import React, { useState, useContext } from "react";

import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import Button from "@components/Button";

import { useHistory } from "react-router";
import { UserContext } from "../context/UserContext";

// import getUserFavorites from "../services/getUserFavorites";

import "@styles/components/FavoriteCard.scss";
import postService from "../services/postService";

const FavoritesCard = ({ id, town }) => {
  const [toggleFav, setToggleFav] = useState(true);

  const { user, setUser } = useContext(UserContext);

  const history = useHistory();
  const handleClick = (e) => {
    history.push(`/detail/${town.id}`);
  };

  const deleteFavorite = async () => {
    setToggleFav(false);

    await fetch(`http://localhost:8080/favorites/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
  };

  const addFavorite = async () => {
    setToggleFav(true);
    await postService("favorites", { userId: user.id, townId: town.id });
  };

  return (
    <div className="favorite-card">
      <img
        className="favorite-card__image"
        src={town.cover}
        alt={`Imagen de ${town.name}`}
      />
      <h3 className="favorite-card__name">{town.name}</h3>
      <h4 className="favorite-card__state">{town.state}</h4>
      <div className="favorite-card__footer">
        {toggleFav ? (
          <FavoriteIcon onClick={deleteFavorite} />
        ) : (
          <FavoriteBorderIcon onClick={addFavorite} />
        )}

        <Rating
          className="detail_stars"
          name="read-only"
          value={town.rate}
          readOnly
        />
        <Button label={"Ver más"} onClick={handleClick} />
      </div>
    </div>
  );
};

export default FavoritesCard;
