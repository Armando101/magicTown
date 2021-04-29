import React from "react";
import "@styles/components/DiscoverTownCard.scss";
import Button from "./Button";

function DiscoverTownCard({ townInfo }) {
  const townName = `${townInfo.name} - ${townInfo.state}`;
  const thumbnail = { ...townInfo.photos };

  return (
    <div className="discovertowncard">
      <img
        className="discovertowncard__thumbnail"
        src={thumbnail[0]}
        alt={townName}
      />
      <div className="discovertowncard__body">
        <h6 className="discovertowncard__title">{townName}</h6>
        <p className="discovertowncard__description">{townInfo.description}</p>
        <Button label="Enséñame más" />
      </div>
    </div>
  );
}

export default DiscoverTownCard;
