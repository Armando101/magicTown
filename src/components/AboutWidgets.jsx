import React, { useContext } from "react";

import Map from "./Map";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { UserContext } from "../context/UserContext";

import getUserFavorites from "../services/favorites/getUserFavorites";
import deleteUserFavorite from "../services/favorites/deleteUserFavorite";
import addUserFavorite from "../services/favorites/addUserFavorite";

function AboutWidgets({
  toggleFav,
  setToggleFav,
  mapURL,
  townId,
  userFavoriteId,
}) {
  const { user, setUserFavorites } = useContext(UserContext);

  const deleteFavorite = () => {
    setToggleFav(false);

    deleteUserFavorite(userFavoriteId).then(() => {
      getUserFavorites(user.uid).then((favorites) => {
        setUserFavorites(favorites);
      });
    });
  };

  const addFavorite = () => {
    setToggleFav(true);

    addUserFavorite(user.uid, { town: townId }).then(() => {
      getUserFavorites(user.uid).then((favorites) => {
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

      <Map map={mapURL} />
    </div>
  );
}

export default AboutWidgets;
