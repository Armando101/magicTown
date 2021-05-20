import React, { useContext } from "react";

import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@components/Button";

import { useHistory } from "react-router";
import { UserContext } from "../context/UserContext";

import getUserFavorites from "../services/getUserFavorites";

import "@styles/components/FavoriteCard.scss";

const FavoritesCard = ({ id, town }) => {
  const { user, setUserFavorites } = useContext(UserContext);

  const history = useHistory();
  const handleClick = (e) => {
    history.push(`/detail/${town.id}`);
  };

  const deleteFavorite = () => {
    fetch(`http://localhost:3001/favorites/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }).then(() => {
      getUserFavorites(user.id).then((favorites) => {
        setUserFavorites(favorites);
      });
    });
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
        <FavoriteIcon onClick={deleteFavorite} />
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
