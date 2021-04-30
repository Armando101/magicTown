import React from "react";
import InputReview from "./InputReview";
import "@styles/components/Comments.scss";
import CommentsCard from "./CommentsCard";

import { latestReviews } from "../dummyData";



function Comments ({name}) {
  return (
    <section className="comments">
      <div className="reviews">
        {latestReviews.map((review, index) => {
          return <CommentsCard key={index} reviewInfo={review}/>;
        })}
      </div>
      <h3 className="comments__title">¿Visistaste {name}?</h3>
      <h3 className="comments__cta">¡Comparte tu experiencia</h3>
      <InputReview />
    </section>

  );
};

export default Comments;
