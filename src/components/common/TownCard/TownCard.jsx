import React from "react";
import { useHistory } from "react-router";

import Button from "../Button/Button";

import "@styles/components/TownCard.scss";

function TownCard({ id, name, state, photos, description }) {
  const thumbnail = { ...photos };

  const history = useHistory();

  const handleClick = (e) => {
    history.push({ pathname: `/detail/${name}`, state: { id } });
  };

  return (
    <div className="town-card">
      <img className="town-card__thumbnail" src={thumbnail[0]} alt={name} />
      <div className="town-card__body">
        <h6 className="town-card__title">{`${name} - ${state}`}</h6>
        <p className="town-card__description">{description}</p>
        <div className="town-card__footer">
          <Button label="Enséñame más" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default TownCard;
