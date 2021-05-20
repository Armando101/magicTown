import React from "react";
import "@styles/components/TownCard.scss";
import Button from "./Button";
import { useHistory } from "react-router";

function TownCard({ townInfo }) {
  const townName = `${townInfo.name} - ${townInfo.state}`;
  const thumbnail = { ...townInfo.photos };

  const history = useHistory();

  const handleClick = (e) => {
    history.push(`/detail/${townInfo.id}`);
  };

  return (
    <div className="town-card">
      <img className="town-card__thumbnail" src={thumbnail[0]} alt={townName} />
      <div className="town-card__body">
        <h6 className="town-card__title">{townName}</h6>
        <p className="town-card__description">{townInfo.description}</p>
        <div className="town-card__footer">
          <Button label="Enséñame más" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default TownCard;
