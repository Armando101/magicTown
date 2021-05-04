import React, { useContext, useEffect, useState } from "react";
import "@styles/components/About.scss";
import Rating from "@material-ui/lab/Rating";
import DetailList from "./DetailList";

import { UserContext } from "../context/UserContext";
import getUserFavorites from "../services/getUserFavorites";
import AboutWidgets from "../components/AboutWidgets";
import compareTownName from "../helpers/compareTownName";

const About = (town) => {
  const { user, setUser } = useContext(UserContext);

  const [favorites, setFavorites] = useState([{}]);

  const [toggleFav, setToggleFav] = useState(false);

  const [userFavoriteInfo, setUserFavoriteInfo] = useState();

  useEffect(() => {
    if (user == null) return;
    getUserFavorites(user.id).then((response) => {
      setFavorites(response);
    });

    const response = compareTownName(favorites, town.name);
    if (response) {
      const result = { ...response };
      setUserFavoriteInfo(result);
      setToggleFav(true);
    }
  }, [town]);

  return (
    <section className="about">
      <div className="about__info">
        <div className="detail__stars">
          <h1>
            {town.name}, {town.state}
          </h1>

          <Rating
            className="detail__stars"
            name="read-only"
            value={town.rate || 0}
            readOnly
          />

          <p>Incorporado en: {town.incorporation_year}</p>
        </div>
        <div className="about__description">
          <h3 className="about__title">Acerca de</h3>

          <div>
            <p className="about__weather">
              Clima: {town.clima} - Bioma: {town.biome}
            </p>
            <p className="about__description">{town.description}</p>
            <DetailList title="Festividades" data={{ ...town.festivities }} />
            <DetailList title="Atracciones" data={{ ...town.attractions }} />
            <DetailList title="Grupos Étnicos" data={{ ...town.ethnics }} />
            <DetailList title="Platillos Típicos" data={{ ...town.dishes }} />
          </div>
        </div>
      </div>
      <AboutWidgets
        user={user}
        toggleFav={toggleFav}
        setToggleFav={setToggleFav}
        map={town.mapsURL}
        userFavoriteInfo={userFavoriteInfo}
        townId={town.id}
      />
    </section>
  );
};

export default About;
