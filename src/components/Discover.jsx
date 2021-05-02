import React, { useEffect, useState } from "react";

import TownCard from "./TownCard";

import getMostLikedTowns from "../services/getMostLikedTowns";

import "../styles/components/Discover.scss";

function Discover() {
  const [mostLikedTowns, setMostLikedTowns] = useState([{}]);

  useEffect(async () => {
    await getMostLikedTowns().then((towns) => {
      setMostLikedTowns(towns);
    });
  }, []);

  return (
    <div className="discover">
      <h3 className="section-title">
        Descubre los Pueblos Mágicos mejor calificados
      </h3>
      {mostLikedTowns.map((town, index) => {
        return <TownCard key={index} townInfo={town} />;
      })}
    </div>
  );
}

export default Discover;
