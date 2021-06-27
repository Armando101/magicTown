import React, { useEffect, useState } from "react";

import TownCard from "../../common/TownCard/TownCard";

import getTopRated from "../../../services/towns/getTopRatedTowns";

import "./Discover.scss";
import { useFetch } from "../../../hooks/useFetch";

function Discover() {
  const [topRatedTowns, setTopRatedTowns] = useState([{}]);

  try {
    const { data, loading } = useFetch(getTopRated);

    useEffect(() => {
      loading != true && setTopRatedTowns(data);
    }, [data]);
  } catch (error) {
    console.error(error.message);
  }

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
