import React, { useContext, useEffect, useState } from "react";
import "./About.scss";

import Rating from "@material-ui/lab/Rating";
import DetailList from "./DetailList/DetailList";
import AboutWidgets from "./AboutWidgets/AboutWidgets";

import { UserContext } from "../../../context/UserContext";

import compareTownName from "../../../helpers/compareTownName";

const About = (town) => {
  const { user, userFavorites } = useContext(UserContext);

  const [toggleFav, setToggleFav] = useState(false);

  const [userFavoriteId, setUserFavoriteId] = useState();

  useEffect(() => {
    if (user == null) return;

    const id = compareTownName(userFavorites, town.name);
    if (id) {
      setUserFavoriteId(id);
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
              <b>Clima:</b> {town.weather} - <b>Bioma:</b> {town.biome}
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
        toggleFav={toggleFav}
        setToggleFav={setToggleFav}
        mapURL={town.mapURL}
        userFavoriteId={userFavoriteId}
        townId={town.id}
      />
    </section>
  );
};

export default About;
