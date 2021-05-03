import React from "react";
import InputReview from "./InputReview";
import "@styles/components/Comments.scss";
import CommentsCard from "./CommentsCard";

function Comments({ townName, townId, reviewsState, openModal }) {
  const reviews = { ...reviewsState.reviews };
  console.log("asdas", Object.keys(reviews).length);

  return (
    <section className="comments">
      <div>
        <h3 className="section-title">Reseñas de otros viajeros</h3>
        {Object.keys(reviews).length == 0 ? (
          <div className="reviews">
            <p>Aún nadie ha escrito alguna reseña, se el primero!</p>
          </div>
        ) : (
          <div className="reviews">
            {Object.values(reviews).map((review, index) => {
              return <CommentsCard key={index} reviewInfo={review} />;
            })}
          </div>
        )}
      </div>
      <h3 className="comments__title">¿Visistaste {townName}?</h3>
      <h3 className="comments__cta">¡Comparte tu experiencia</h3>
      <InputReview
        reviewsState={reviewsState}
        townId={townId}
        openModal={openModal}
      />
    </section>
  );
}

export default Comments;
