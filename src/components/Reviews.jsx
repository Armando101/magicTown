import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Review.scss";
import Button from "./Button";
import ReviewCard from "./ReviewCard";

function Reviews({ userInfo, latestReviews }) {
  return (
    <div className="review">
      <div className="review__image" role="image" aria-label="Guanajuato">
        <div className="review__overlay">
          <h2>
            ¿Has viajado a <br /> un pueblo Mágico?
          </h2>
          <p>Comparte tu experiencia</p>
          <NavLink
            to={userInfo ? "/profile/reviews" : "/login"}
            className="button"
          >
            <p>Compartelo Aquí</p>
          </NavLink>
        </div>
      </div>
      <h3 className="section-title">Descubre experiencias de otras personas</h3>
      <div className="reviews">
        {latestReviews.map((review, index) => {
          return <ReviewCard key={index} reviewInfo={review} />;
        })}
      </div>
    </div>
  );
}

export default Reviews;
