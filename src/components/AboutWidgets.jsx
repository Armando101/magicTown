import React, { useEffect } from "react";

import Map from "./Map";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import postService from "../services/postService";

function AboutWidgets({
  user,
  toggleFav,
  setToggleFav,
  map,
  townId,
  userFavoriteInfo,
}) {
  const deleteFavorite = () => {
    setToggleFav(false);

    fetch(`http://localhost:8080/favorites/${userFavoriteInfo.id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
  };

  const addFavorite = () => {
    setToggleFav(true);
    postService("favorites", { userId: user.id, townId: townId });
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
