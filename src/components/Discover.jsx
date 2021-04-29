import React, { useEffect, useState } from "react";
import DiscoverTownCard from "./DiscoverTownCard";
import "../styles/components/Discover.scss";
import getMostLikedTowns from "../services/getMostLikedTowns";

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
        return <DiscoverTownCard key={index} townInfo={town} />;
      })}
    </div>
  );
}

export default Discover;
