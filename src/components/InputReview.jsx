import React from "react";
import Button from "@components/Button";
import "@styles/components/InputReview.scss";
import Rating from "@material-ui/lab/Rating";

const InputReview = () => {
  return (
    <div className="input-review">
      <div className="input-review__rate">
        <p>Califica tu experiencia:</p>
        <Rating className="detail_stars" name="read-only" value={0} readOnly />
      </div>
      <textarea
        className="input-review__area"
        name="comment"
        cols="30"
        rows="10"
        placeholder="Escribe aquí tu experiencia..."
      ></textarea>
      <div className="input-review__button">
        <Button label={"Publicar mi experiencia"} />
      </div>
    </div>
  );
};

export default InputReview;
