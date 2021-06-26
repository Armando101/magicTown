import React, { useContext } from "react";

import Map from "../Map/Map";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { UserContext } from "../../../../context/UserContext";

import getUserFavorites from "../../../../services/favorites/getUserFavorites";
import deleteUserFavorite from "../../../../services/favorites/deleteUserFavorite";
import addUserFavorite from "../../../../services/favorites/addUserFavorite";

function AboutWidgets({
  toggleFav,
  setToggleFav,
  mapURL,
  townId,
  userFavoriteId,
}) {
  const { user, setUserFavorites } = useContext(UserContext);

  const deleteFavorite = async () => {
    setToggleFav(false);

    try {
      await deleteUserFavorite(userFavoriteId);

      const favorites = await getUserFavorites(user.uid);
      setUserFavorites(favorites);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addFavorite = async () => {
    setToggleFav(true);

    try {
      await addUserFavorite(user.uid, { town: townId });

      const favorites = await getUserFavorites(user.uid);
      setUserFavorites(favorites);
    } catch (error) {
      console.log(error.message);
    }
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
