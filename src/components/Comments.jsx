import React from "react";
import InputReview from "./InputReview";
import "@styles/components/Comments.scss";

const Comments = ({ townName, townId, reviewsState, openModal }) => {
  return (
    <section className="comments">
      <h3 className="comments__title">¿Visitaste {townName}?</h3>
      <h3 className="comments__cta">¡Comparte tu experiencia</h3>
      <InputReview
        reviewsState={reviewsState}
        townId={townId}
        openModal={openModal}
      />
    </section>
  );
};

export default Comments;
