import React, { useState, useContext } from "react";

import Button from "../../../common/Button/Button";
import Rating from "@material-ui/lab/Rating";

import { UserContext } from "../../../../context/UserContext";

import { useHistory } from "react-router";

import { useForm } from "../../../../hooks/useForm";

import addReview from "../../../../services/reviews/addReview";
import getTownReviews from "../../../../services/reviews/getTownReviews";
import patchTown from "../../../../services/towns/patchTown";

import "./InputReview.scss";

const InputReview = ({ townId, setReviews, openModal }) => {
  const { user } = useContext(UserContext);

  const history = useHistory();

  const [formReviewValues, handleReviewInputChange, reset] = useForm({
    description: "",
  });
  const { description } = formReviewValues;

  const [rate, setRate] = useState(0);

  const handleRateChange = (e, value) => {
    setRate(value);
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

    try {
      await addReview(user.uid, { town: townId, rate, description });

      const reviews = await getTownReviews(townId);
      setReviews(reviews);

      await patchTown(townId, { rate });
    } catch (error) {
      console.error(error.message);
    }

    reset();
    setRate(0);
  };

  return (
    <form onSubmit={handleSubmit} className="input-review">
      <div className="input-review__rate">
        <p>Califica tu experiencia:</p>
        <Rating
          className="detail_stars"
          onChange={handleRateChange}
          name="read-only"
          value={rate}
        />
      </div>
      <textarea
        className="input-review__area"
        name="description"
        cols="30"
        rows="10"
        placeholder="Escribe aquí tu experiencia..."
        value={description}
        onChange={handleReviewInputChange}
      ></textarea>
      <div className="input-review__button">
        <Button label={"Publicar mi experiencia"} />
      </div>
    </form>
  );
};

export default InputReview;
