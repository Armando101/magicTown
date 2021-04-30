import React, { useEffect, useState } from "react";
import "@styles/components/About.scss";
import Rating from "@material-ui/lab/Rating";
import DetailList from "./DetailList";
import Map from "./Map";

const About = (town) => {
  const festivities = { ...town.festivities };
  const attractions = { ...town.attractions };
  const ethnics = { ...town.ethnics };
  const dishes = { ...town.dishes };

  return (
    <section className="about">
      <div className="about__info">
        <div className="detail__stars">
          <h1>
            {town.name},{town.state}
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
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              accusantium veniam, qui praesentium magnam dicta, hic optio
              laborum nam unde voluptatum laudantium earum consequatur quibusdam
              incidunt eos tempore, officiis blanditiis. Minus laudantium
              dolorem neque vero inventore voluptatem repellendus? Rem adipisci
              reprehenderit dolores reiciendis, maxime quis qui. Numquam ducimus
              cupiditate eaque optio quis blanditiis mollitia reiciendis
              voluptatum, explicabo fugiat, vero deleniti?
            </p>
            <DetailList title="Festividades" data={festivities} />
            <DetailList title="Atracciones" data={attractions} />
            <DetailList title="Grupos Étnicos" data={ethnics} />
            <DetailList title="Platillos Típicos" data={dishes} />
          </div>
        </div>
      </div>
      <Map maps={town.mapsURL} />
    </section>
  );
};

export default About;
