import React, { useState, useContext } from "react";
import Button from "@components/Button";
import "@styles/components/InputReview.scss";
import Rating from "@material-ui/lab/Rating";
import postService from "../services/postService";
import getTownById from "../services/getTownById.js";

import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router";
import updtReviewRate from "../services/updtReviewRate";

const InputReview = ({ townId, reviewsState, openModal }) => {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const [rateValue, setRateValue] = useState(0);
  const [description, setDescription] = useState("");

  const handleRateChange = (e, value) => {
    setRateValue(value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user == null) {
      history.push("/login");
      return;
    }

    if (!description) {
      openModal();
      return;
    }

    postService("reviews", {
      userId: user.id,
      townId: townId,
      rate: rateValue,
      description: description,
      creation_date: new Date().toISOString().slice(0, 10),
    });

    updtReviewRate(townId, { rate: rateValue });

    const response = await getTownById(townId);

    reviewsState.setReviews(response.reviews);

    e.target.comment.value = "";

    setRateValue(0);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-review">
      <div className="input-review__rate">
        <p>Califica tu experiencia:</p>
        <Rating
          className="detail_stars"
          onChange={handleRateChange}
          name="read-only"
          value={rateValue}
        />
      </div>
      <textarea
        className="input-review__area"
        name="comment"
        cols="30"
        rows="10"
        placeholder="Escribe aquí tu experiencia..."
        onChange={handleDescriptionChange}
      ></textarea>
      <div className="input-review__button">
        <Button label={"Publicar mi experiencia"} />
      </div>
    </form>
  );
};

export default InputReview;
