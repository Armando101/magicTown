import React from "react";
import DiscoverTownCard from "./DiscoverTownCard";
import "../styles/components/Discover.scss";

function Discover({ mostLikedTowns }) {
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
