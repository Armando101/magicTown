import React from "react";
import Button from "@components/Button";
import Rating from "@material-ui/lab/Rating";

const FavoritesCard = ({ img, name, stars, state }) => {
  return (
    <div>
      <img src={img} alt={`Imagen de ${name}`} />
      <h3>{name}</h3>
      <h4>{state}</h4>
      <Rating
        className="detail_stars"
        name="read-only"
        value={stars}
        readOnly
      />
      <Button label={"Ver más"} />
    </div>
  );
};

export default FavoritesCard;
