import React, { useState, useContext } from "react";
import Button from "@components/Button";
import Rating from "@material-ui/lab/Rating";

import { UserContext } from "../context/UserContext";

import { useHistory } from "react-router";

import { useForm } from "../hooks/useForm";

import addReview from "../services/reviews/addReview";
import getTownReviews from "../services/reviews/getTownReviews";
import patchTownRate from "../services/towns/patchTownRate";

import "@styles/components/InputReview.scss";

const InputReview = ({ townId, reviewsState, openModal }) => {
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
    addReview(user.uid, { town: townId, rate, description })
      .then((review) => {
        getTownReviews(townId).then((reviews) => {
          reviewsState.setReviews(reviews);
        });
        patchTownRate(townId, { rate });
      })
      .catch((error) => {
        console.log(error.message);
      });

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
