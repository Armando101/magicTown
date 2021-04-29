import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import getLatestReviews from "../services/getLatestReviews";

import LatestReviewCard from "./LatestReviewCard";

import "../styles/components/Review.scss";

function Reviews() {
  const { user, setUser } = useContext(UserContext);
  const [latestReviews, setLatestReviews] = useState([{}]);

  useEffect(async () => {
    await getLatestReviews().then((reviews) => {
      setLatestReviews(reviews);
    });
  }, []);

  return (
    <div className="review">
      <div className="review__image" role="image" aria-label="Guanajuato">
        <div className="review__overlay">
          <h2>
            ¿Has viajado a <br /> un pueblo Mágico?
          </h2>
          <p>Comparte tu experiencia</p>
          <NavLink to={user ? "/profile/reviews" : "/login"} className="button">
            <p>Compartelo Aquí</p>
          </NavLink>
        </div>
      </div>
      <h3 className="section-title">Descubre experiencias de otras personas</h3>
      <div className="reviews">
        {latestReviews.map((review, index) => {
          return <LatestReviewCard key={index} reviewInfo={review} />;
        })}
      </div>
    </div>
  );
}

export default Reviews;
