import React from "react";
import "@styles/components/DiscoverTownCard.scss";
import Button from "./Button";

function DiscoverTownCard({ townInfo }) {
  const townName = `${townInfo.name} - ${townInfo.state}`;
  return (
    <div className="discovertowncard">
      <img
        className="discovertowncard__thumbnail"
        src={townInfo.thumbnail}
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
