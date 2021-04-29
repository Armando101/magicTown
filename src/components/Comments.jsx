import React from "react";
import InputReview from "./InputReview";
import "@styles/components/Comments.scss";

const Comments = ({ name }) => {
  return (
    <section className="comments">
      <h3 className="comments__title">¿Visitaste {name}?</h3>
      <h3 className="comments__cta">¡Comparte tu experiencia</h3>
      <InputReview />
    </section>
  );
};

export default Comments;
