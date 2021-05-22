import React, { useEffect, useState } from "react";

import TownCard from "./TownCard";

import getTopRated from "../services/towns/getTopRatedTowns";

import "../styles/components/Discover.scss";

function Discover() {
  const [topRatedTowns, setTopRatedTowns] = useState([{}]);

  useEffect(() => {
    let isMounted = true;
    getTopRated().then((towns) => {
      isMounted && setTopRatedTowns(towns);
    });

    return () => (isMounted = false);
  }, []);

  return (
    <div className="discover">
      <h3 className="section-title">
        Descubre los Pueblos Mágicos mejor calificados
      </h3>
      {topRatedTowns.map((town, index) => {
        return <TownCard key={index} {...town} />;
      })}
    </div>
  );
}

export default Discover;
