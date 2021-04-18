import React from "react";
import "../styles/components/Review.scss";
import ReviewCard from "./ReviewCard";

function Review({ latestReviews }) {
  return (
    <div className="review">
      <div className="review__image" role="image" aria-label="Guanajuato"></div>
      <h3 className="section-title">Descubre experiencias de otras personas</h3>
      <div className="reviews">
        {latestReviews.map((review, index) => {
          return <ReviewCard key={index} reviewInfo={review} />;
        })}
      </div>
    </div>
  );
}

export default Review;
