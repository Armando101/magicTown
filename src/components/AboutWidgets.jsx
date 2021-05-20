import React, { useEffect, useContext } from "react";

import Map from "./Map";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { UserContext } from "../context/UserContext";

import postService from "../services/postService";
import getUserFavorites from "../services/getUserFavorites";

function AboutWidgets({
  toggleFav,
  setToggleFav,
  map,
  townId,
  userFavoriteId,
}) {
  const { user, setUserFavorites } = useContext(UserContext);

  const deleteFavorite = () => {
    setToggleFav(false);

    fetch(`http://localhost:3001/favorites/${userFavoriteId}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }).then(() => {
      getUserFavorites(user.id).then((favorites) => {
        setUserFavorites(favorites);
      });
    });
  };

  const addFavorite = () => {
    setToggleFav(true);
    postService("favorites", { userId: user.id, townId }).then(() => {
      getUserFavorites(user.id).then((favorites) => {
        setUserFavorites(favorites);
      });
    });
  };

  return (
    <div className="about__widgets">
      {user != null ? (
        toggleFav ? (
          <div className="icon">
            <FavoriteIcon onClick={deleteFavorite} />
            <p>Guardar</p>
          </div>
        ) : (
          <div className="icon">
            <FavoriteBorderIcon onClick={addFavorite} />
            <p>Guardar</p>
          </div>
        )
      ) : null}

      <Map map={map} />
    </div>
  );
}

export default AboutWidgets;
